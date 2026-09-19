import Link from 'next/link';
import {
  getLandingPages,
  getProcedureSurgeries,
  getBoneJointContent,
} from '@/lib/directus';

/**
 * Server-rendered A–Z directory of every lander, procedure and condition.
 *
 * Rendered site-wide (from the root layout) so crawlers reach every commercial
 * and educational page in one hop, without depending on the client-only
 * mega-menu.
 */

const MERGED_PROCEDURE_SLUGS = new Set([
  'acl-reconstruction',
  'meniscal-repair',
  'rotator-cuff-repair',
  'hip-replacement-thr',
]);

// Static landers under src/app/(static) that are not in the CMS.
const STATIC_LANDERS: Array<{ title: string; href: string }> = [
  { title: 'ACL Reconstruction Surgery in Bangalore', href: '/acl-reconstruction-surgery-in-bangalore' },
  { title: 'ACL Reconstruction & Meniscus Repair', href: '/acl-reconstruction-and-meniscus-repair' },
  { title: 'ACL Tear Laser Therapy', href: '/acl-tear-laser-therapy' },
  { title: 'Arthroscopic Debridement: Procedure & Recovery', href: '/arthroscopic-debridement-guide-procedure-and-recovery' },
  { title: 'Meniscus Tear: Exercises to Avoid', href: '/meniscus-tear-exercises-to-avoid' },
  { title: 'Robotic Knee Replacement Surgeon in Bangalore', href: '/robotic-knee-replacement-surgeon-in-bangalore' },
  { title: 'Stages of Avascular Necrosis', href: '/stages-of-avascular-necrosis-symptoms-and-treatments' },
  { title: 'Total Hip Replacement in Bangalore', href: '/total-hip-replacement-in-bangalore' },
  { title: 'Total Knee Replacement in Bangalore', href: '/total-knee-replacement-in-bangalore' },
];

function cleanTitle(t?: string): string {
  return (t || '').replace(/\s*\|\s*Sports Orthopedics.*$/i, '').trim();
}

export default async function AZIndex() {
  const [landers, proceduresRes, conditions] = await Promise.all([
    getLandingPages().catch(() => [] as any[]),
    getProcedureSurgeries(1000).catch(() => ({ data: [] as any[] })),
    getBoneJointContent().catch(() => [] as any[]),
  ]);

  const procedures = Array.isArray((proceduresRes as any)?.data) ? (proceduresRes as any).data : [];

  const links = new Map<string, string>(); // href -> title

  for (const l of STATIC_LANDERS) links.set(l.href, l.title);

  for (const item of landers as any[]) {
    if (item?.slug) links.set(`/${item.slug}`, cleanTitle(item.title) || item.slug);
  }
  for (const item of procedures as any[]) {
    if (item?.slug && !MERGED_PROCEDURE_SLUGS.has(item.slug)) {
      links.set(`/procedure-surgery/${item.slug}`, cleanTitle(item.title) || item.slug);
    }
  }
  for (const item of conditions as any[]) {
    if (item?.slug) links.set(`/bone-joint-school/${item.slug}`, cleanTitle(item.title) || item.slug);
  }

  const sorted = [...links.entries()]
    .map(([href, title]) => ({ href, title }))
    .sort((a, b) => a.title.localeCompare(b.title));

  if (!sorted.length) return null;

  return (
    <section aria-label="Full site directory" className="bg-soi-navy-800 text-white/80 border-t border-soi-navy-600">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
          Explore all treatments &amp; conditions
        </h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {sorted.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white hover:underline">
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
