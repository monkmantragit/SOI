import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  href: string;
  kind?: 'Lander' | 'Procedure' | 'Condition' | 'Surgeon' | 'Cost';
}

/**
 * Contextual cross-links between landers, procedures, conditions and the surgeon.
 * Complements the site-wide A–Z index with a small, curated "related" set.
 */
export default function RelatedContent({
  heading = 'Related treatments & information',
  links,
}: {
  heading?: string;
  links: RelatedLink[];
}) {
  const items = (links || []).filter((l) => l?.href && l?.title);
  if (!items.length) return null;

  return (
    <section className="bg-gray-50 py-12" aria-label={heading}>
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-xl font-bold text-soi-navy-800 mb-5">{heading}</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex items-center justify-between gap-3 rounded-lg border border-soi-purple-100 bg-white px-4 py-3 transition-colors hover:border-soi-purple-300"
              >
                <span className="text-sm font-medium text-soi-navy-800">{l.title}</span>
                <span className="flex items-center gap-2">
                  {l.kind && (
                    <span className="hidden rounded-full bg-soi-purple-50 px-2 py-0.5 text-[11px] text-soi-purple-600 sm:inline">
                      {l.kind}
                    </span>
                  )}
                  <ArrowRight className="h-4 w-4 text-soi-purple-400 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** A sensible default set of cross-links (used when a page has no specific set). */
export const DEFAULT_RELATED: RelatedLink[] = [
  { title: 'ACL Reconstruction in Bangalore', href: '/acl-reconstruction-surgery-in-bangalore', kind: 'Lander' },
  { title: 'Total Knee Replacement in Bangalore', href: '/total-knee-replacement-in-bangalore', kind: 'Lander' },
  { title: 'Total Hip Replacement in Bangalore', href: '/total-hip-replacement-in-bangalore', kind: 'Lander' },
  { title: 'Robotic Knee Replacement Surgeon', href: '/robotic-knee-replacement-surgeon-in-bangalore', kind: 'Lander' },
  { title: 'Bone & Joint School (conditions)', href: '/bone-joint-school', kind: 'Condition' },
  { title: 'Meet Dr Naveen Kumar L V', href: '/surgeons-staff/naveen', kind: 'Surgeon' },
];
