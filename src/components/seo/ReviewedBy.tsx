import Link from 'next/link';
import { PRIMARY_DOCTOR } from '@/lib/seo/site';

interface ReviewedByProps {
  /** ISO date or date string for the "Updated" label. */
  updated?: string | null;
  /** Optional different author; defaults to the reviewing doctor. */
  authorName?: string;
  className?: string;
}

function formatDate(value?: string | null): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * E-E-A-T byline. Shows author + medical reviewer (Dr Naveen Kumar L V) and the
 * last-updated date. Rendered on blogs, conditions, procedures and landers.
 */
export default function ReviewedBy({ updated, authorName, className = '' }: ReviewedByProps) {
  const author = authorName || PRIMARY_DOCTOR.name;
  const updatedLabel = formatDate(updated);
  const doctorHref = '/surgeons-staff/naveen';

  return (
    <div
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-soi-navy-600 ${className}`}
    >
      <span>
        Written by{' '}
        <Link href={doctorHref} className="font-medium text-soi-navy-800 hover:text-soi-pink-600 hover:underline">
          {author}
        </Link>
      </span>
      <span aria-hidden="true">·</span>
      <span>
        Medically reviewed by{' '}
        <Link href={doctorHref} className="font-medium text-soi-navy-800 hover:text-soi-pink-600 hover:underline">
          {PRIMARY_DOCTOR.name}
        </Link>
        <span className="text-soi-navy-500"> ({PRIMARY_DOCTOR.degrees}, KMC {PRIMARY_DOCTOR.kmc})</span>
      </span>
      {updatedLabel && (
        <>
          <span aria-hidden="true">·</span>
          <span>Updated {updatedLabel}</span>
        </>
      )}
    </div>
  );
}
