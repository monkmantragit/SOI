/**
 * Single source of truth for site-wide SEO / NAP (Name-Address-Phone) data.
 *
 * Everything the schema graph, metadata, robots, sitemap and canonical helpers
 * need lives here. Real values were sourced from the live contact page and the
 * doctor's verified social profiles. A few values are marked PLACEHOLDER / VERIFY
 * where only the practice can confirm the exact figure (Maps pin, price ranges).
 */

export const SITE_URL = 'https://sportsorthopedics.in';
export const SITE_HOST = 'sportsorthopedics.in';
export const SITE_NAME = 'Sports Orthopedics Institute';
export const SITE_SHORT_NAME = 'Sports Orthopedics';
export const SITE_TAGLINE = 'Orthopedic & Sports Injury Specialists in Bangalore';
export const SITE_DESCRIPTION =
  'Sports Orthopedics Institute in HSR Layout, Bangalore offers specialist orthopedic care — ACL reconstruction, arthroscopy, joint replacement and sports injury treatment led by Dr Naveen Kumar L V.';

/** Name, Address, Phone — real values from the live contact page. */
export const NAP = {
  legalName: SITE_NAME,
  // Primary appointment line (mobile, WhatsApp-capable) listed first on contact page.
  phone: '+916364538660',
  phoneDisplay: '+91 63645 38660',
  phones: ['+916364538660', '+919008520831', '+918041276853'],
  // Digits only, for wa.me links.
  whatsapp: '916364538660',
  email: 'sportsorthopedics.in@gmail.com',
  street:
    '1084, 2nd Floor, Shirish Foundation, 14th Main, 18th Cross, Sector 3, HSR Layout',
  locality: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560102',
  country: 'IN',
  // Approximate — from the contact-page Maps embed. VERIFY against the GBP pin.
  geo: { lat: 12.9119659, lng: 77.6387069 },
  mapsUrl: 'https://maps.google.com/?q=Sports+Orthopedics+HSR+Layout+Bangalore',
  priceRange: '₹₹',
} as const;

/** Opening hours. Mon–Sat 9:00–18:00 (Sunday by appointment only). */
export const OPENING_HOURS = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
] as const;

/** Verified public profiles for sameAs. */
export const SOCIAL = [
  'https://www.facebook.com/profile.php?id=100064057982646',
  'https://www.instagram.com/sportsorthopedics',
  'https://www.linkedin.com/company/sports-orthopedics-institute',
] as const;

/** Practo aggregate rating shown on the homepage tile and in Physician schema. */
export const PRACTO = {
  ratingValue: 5.0,
  reviewCount: 1533,
  bestRating: 5,
  worstRating: 1,
  profileUrl: 'https://www.practo.com/bangalore/doctor/dr-naveen-kumar-l-v-orthopedist',
} as const;

/** Primary surgeon — used for reviewedBy bylines and Physician schema. */
export const PRIMARY_DOCTOR = {
  name: 'Dr Naveen Kumar L V',
  slug: 'naveen-kumar-l-v',
  jobTitle: 'Orthopedic & Sports Medicine Surgeon',
  // Karnataka Medical Council registration number.
  kmc: '51965',
  degrees: 'MBBS, MS (Orthopedics)',
  sameAs: [
    'https://www.linkedin.com/in/dr-naveen-kumar-lv/',
    'https://www.instagram.com/drnaveenkumarlv',
    'https://x.com/Naveen_Lokikere',
  ],
  memberships: [
    'Royal College of Surgeons of England',
    'Indian Orthopaedic Association',
    'Indian Arthroscopy Society',
  ],
} as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOGO_URL = `${SITE_URL}/logo.jpg`;

/**
 * Return an absolute canonical URL for a path on this site.
 * Always produces a clean https://sportsorthopedics.in/... URL, no trailing slash
 * (except the root).
 */
export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE_URL + '/';
  let p = path.trim();
  // If a full URL on our host was passed, keep only the path.
  if (/^https?:\/\//i.test(p)) {
    try {
      const u = new URL(p);
      p = u.pathname;
    } catch {
      p = '/';
    }
  }
  if (!p.startsWith('/')) p = '/' + p;
  // Collapse double slashes and strip a trailing slash.
  p = p.replace(/\/{2,}/g, '/');
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return SITE_URL + p;
}

/**
 * Produce a trustworthy canonical URL.
 *
 * CMS `canonical_url` values in this project frequently point at the old GoDaddy
 * staging host (73n.0c8.myftpupload.com) or are otherwise wrong. We only trust a
 * CMS value if it is already an absolute URL on the production host; otherwise we
 * derive the canonical from the current path.
 *
 * @param path     The route path to fall back to (e.g. `/acl-reconstruction-...`).
 * @param cmsValue An optional canonical_url coming from Directus.
 */
export function safeCanonical(path: string, cmsValue?: string | null): string {
  if (cmsValue && typeof cmsValue === 'string') {
    const trimmed = cmsValue.trim();
    if (trimmed.startsWith(`${SITE_URL}/`) || trimmed === SITE_URL) {
      return absoluteUrl(trimmed);
    }
    // Any other absolute URL (staging host, http, www, unrelated domain) is ignored.
  }
  return absoluteUrl(path);
}

/** The old staging host that must never leak into public HTML/links. */
export const STAGING_HOST = '73n.0c8.myftpupload.com';

/**
 * Rewrite any staging-host URL to the production host. Used to scrub CMS content
 * and image URLs before they are rendered.
 */
export function stripStagingHost<T extends string | null | undefined>(url: T): T {
  if (!url || typeof url !== 'string') return url;
  return url
    .replace(new RegExp(`https?://(www\\.)?${STAGING_HOST.replace(/\./g, '\\.')}`, 'gi'), SITE_URL)
    .replace(/https?:\/\/www\.sportsorthopedics\.in/gi, SITE_URL) as T;
}
