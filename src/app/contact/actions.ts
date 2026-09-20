'use server';

import { headers } from 'next/headers';
import { escapeHtml, isEmailConfigured, sendMail } from '@/lib/email';

/**
 * Contact form submissions.
 *
 * Unlike the fellowship application, there is no database behind this form —
 * the notification email IS the record. So a failed send must be reported as a
 * failure to the visitor; silently "succeeding" would lose the enquiry, which
 * is exactly what this form used to do.
 */

const SUBJECT_OPTIONS = [
    'General Inquiry',
    'Appointment Request',
    'Procedure Information',
    'Second Opinion',
    'Insurance Query',
    'Other',
] as const;

const MAX_LENGTHS = {
    name: 120,
    email: 200,
    phone: 40,
    message: 5000,
};

// The form is public and unauthenticated, and every submission sends mail from
// the clinic's SMTP account. Cap submissions per IP so the inbox (and the
// provider's daily send quota, shared with fellowship notifications) can't be
// exhausted by a script.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map<string, number[]>();

/** Strips CR/LF so user input can't inject extra headers via subject/reply-to. */
function singleLine(value: unknown, maxLength: number): string {
    if (typeof value !== 'string') return '';
    return value.replace(/[\r\n]+/g, ' ').trim().slice(0, maxLength);
}

function multiLine(value: unknown, maxLength: number): string {
    if (typeof value !== 'string') return '';
    return value.trim().slice(0, maxLength);
}

function clientIp(): string | null {
    const headerList = headers();
    const forwarded = headerList.get('x-forwarded-for');
    if (forwarded) {
        const first = forwarded.split(',')[0]?.trim();
        if (first) return first;
    }
    return headerList.get('x-real-ip')?.trim() || null;
}

/** Drops timestamps outside the window so the map can't grow without bound. */
function pruneSubmissions(cutoff: number) {
    for (const [key, times] of recentSubmissions) {
        const kept = times.filter((t) => t > cutoff);
        if (kept.length) recentSubmissions.set(key, kept);
        else recentSubmissions.delete(key);
    }
}

/**
 * True when this IP has already had its fill of *delivered* messages. Returns
 * false for unknown IPs rather than bucketing every such visitor together,
 * which would lock out legitimate users if the app ever runs without a proxy
 * setting the forwarding headers.
 */
function isOverQuota(ip: string | null): boolean {
    if (!ip) return false;
    pruneSubmissions(Date.now() - RATE_LIMIT_WINDOW_MS);
    return (recentSubmissions.get(ip)?.length ?? 0) >= RATE_LIMIT_MAX;
}

/**
 * Counts one delivered message against the IP's quota. Only successful sends
 * are recorded — a visitor who mistypes their email a few times should not be
 * locked out, and rejected submissions never touch the mail server anyway.
 */
function recordSubmission(ip: string | null) {
    if (!ip) return;
    const times = recentSubmissions.get(ip) ?? [];
    recentSubmissions.set(ip, [...times, Date.now()]);
}

interface ContactEnquiry {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

async function notifyTeam(data: ContactEnquiry) {
    const recipient =
        process.env.CONTACT_NOTIFY_EMAIL ||
        process.env.ADMIN_EMAIL;

    if (!recipient) {
        throw new Error(
            'No CONTACT_NOTIFY_EMAIL or ADMIN_EMAIL is configured; cannot deliver the enquiry.',
        );
    }

    const rows: Array<[string, string]> = [
        ['Name', data.name],
        ['Email', data.email],
        ['Phone', data.phone || '—'],
        ['Subject', data.subject],
        ['Message', data.message],
        [
            'Submitted',
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        ],
    ];

    const html = `
        <h2 style="margin:0 0 12px">
            New Contact Enquiry
        </h2>

        <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
            ${rows
                .map(
                    ([label, value]) => `
                        <tr>
                            <td style="padding:6px 12px;font-weight:bold;vertical-align:top;color:#334155">
                                ${escapeHtml(label)}
                            </td>
                            <td style="padding:6px 12px;color:#0f172a">
                                ${escapeHtml(value).replace(/\n/g, '<br>')}
                            </td>
                        </tr>
                    `,
                )
                .join('')}
        </table>

        <p style="margin-top:16px;color:#64748b;font-size:13px">
            Reply directly to this email to respond to ${escapeHtml(data.name)}.
        </p>
    `;

    const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

    await sendMail({
        to: recipient,
        subject: `Contact form: ${data.subject} — ${data.name}`,
        html,
        text,
        // Lets staff hit Reply and reach the enquirer instead of the SMTP account.
        replyTo: data.email,
    });
}

export async function submitContactEnquiry(
    prevState: unknown,
    formData: FormData,
) {
    try {
        // Honeypot: a hidden field real users never see, so anything in it is a bot.
        // Report success so the bot doesn't learn to work around it.
        if (singleLine(formData.get('company'), 100)) {
            return { success: true, message: 'Thank you for your message! We\'ll get back to you soon.' };
        }

        const ip = clientIp();

        if (isOverQuota(ip)) {
            return {
                success: false,
                message: 'Too many messages sent from this device. Please try again in a few minutes.',
            };
        }

        const name = singleLine(formData.get('name'), MAX_LENGTHS.name);
        const email = singleLine(formData.get('email'), MAX_LENGTHS.email);
        const phone = singleLine(formData.get('phone'), MAX_LENGTHS.phone);
        const subjectValue = singleLine(formData.get('subject'), 100);
        const message = multiLine(formData.get('message'), MAX_LENGTHS.message);

        if (!name || !email || !message) {
            return {
                success: false,
                message: 'Please complete all required fields.',
            };
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address.',
            };
        }

        // Only accept subjects the form actually offers.
        const subject = (SUBJECT_OPTIONS as readonly string[]).includes(subjectValue)
            ? subjectValue
            : SUBJECT_OPTIONS[0];

        if (!isEmailConfigured()) {
            console.error('Contact enquiry received but SMTP is not configured — enquiry not delivered.');
            return {
                success: false,
                message: 'We could not send your message right now. Please call us or email us directly.',
            };
        }

        await notifyTeam({ name, email, phone, subject, message });
        recordSubmission(ip);

        return {
            success: true,
            message: 'Thank you for your message! We\'ll get back to you soon.',
        };
    } catch (error) {
        console.error('Contact enquiry notification failed:', error);

        return {
            success: false,
            message: 'We could not send your message right now. Please call us or email us directly.',
        };
    }
}
