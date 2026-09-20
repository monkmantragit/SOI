import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';
import {
  getLandingPages,
  getBlogPosts,
  getBoneJointContent,
  getProcedureSurgeries,
  getStaffMembers,
  getPublications,
} from '@/lib/directus';

// Rebuild the sitemap at most every 5 minutes.
export const revalidate = 300;

/**
 * Procedure slugs that have been merged into a Bangalore lander and now 301 to
 * it (see next.config.mjs). They must NOT appear in the sitemap.
 */
const MERGED_PROCEDURE_SLUGS = new Set([
  'acl-reconstruction',
  'meniscal-repair',
  'rotator-cuff-repair',
  'hip-replacement-thr',
]);

/** Static landing pages under src/app/(static) that should be indexed. */
const STATIC_LANDERS = [
  'acl-reconstruction-and-meniscus-repair',
  'acl-reconstruction-surgery-in-bangalore',
  'acl-tear-laser-therapy',
  'arthroscopic-debridement-guide-procedure-and-recovery',
  'meniscus-tear-exercises-to-avoid',
  'robotic-knee-replacement-surgeon-in-bangalore',
  'stages-of-avascular-necrosis-symptoms-and-treatments',
  'total-hip-replacement-in-bangalore',
  'total-knee-replacement-in-bangalore',
];

/** Evergreen hub / info pages. */
const CORE_PAGES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/procedure-surgery', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/bone-joint-school', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/surgeons-staff', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/publications', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/clinical-videos', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/gallery', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/fellowship-programme', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/physiotherapy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
];

function url(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

function lastmod(item: any): Date | undefined {
  const d = item?.date_updated || item?.date_created;
  const parsed = d ? new Date(d) : undefined;
  return parsed && !isNaN(parsed.getTime()) ? parsed : undefined;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of CORE_PAGES) {
    entries.push({ url: url(p.path), lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority });
  }

  for (const slug of STATIC_LANDERS) {
    entries.push({ url: url(`/${slug}`), lastModified: now, changeFrequency: 'monthly', priority: 0.9 });
  }

  // CMS-driven content. Each fetch is defensive so one failure can't blank the sitemap.
  const [landers, blogs, conditions, proceduresRes, staffRes, publicationsRes] = await Promise.all([
    getLandingPages().catch(() => []),
    getBlogPosts().catch(() => []),
    getBoneJointContent().catch(() => []),
    getProcedureSurgeries(1000).catch(() => ({ data: [] as any[] })),
    getStaffMembers(1000).catch(() => ({ data: [] as any[] })),
    getPublications(1000).catch(() => ({ data: [] as any[] })),
  ]);

  // Some fetchers return arrays, others return { data: [...] }. Normalise.
  const asArray = (v: any): any[] => (Array.isArray(v) ? v : Array.isArray(v?.data) ? v.data : []);
  const procedures = asArray(proceduresRes);
  const staff = asArray(staffRes);
  const publications = asArray(publicationsRes);

  const seen = new Set<string>(STATIC_LANDERS);

  // Landing pages + blog posts both live at the top level `/[slug]`.
  for (const item of landers as any[]) {
    if (!item?.slug || seen.has(item.slug)) continue;
    seen.add(item.slug);
    entries.push({ url: url(`/${item.slug}`), lastModified: lastmod(item) || now, changeFrequency: 'monthly', priority: 0.8 });
  }
  for (const item of blogs as any[]) {
    if (!item?.slug || seen.has(item.slug)) continue;
    seen.add(item.slug);
    entries.push({ url: url(`/${item.slug}`), lastModified: lastmod(item) || now, changeFrequency: 'monthly', priority: 0.7 });
  }

  for (const item of conditions as any[]) {
    if (!item?.slug) continue;
    entries.push({ url: url(`/bone-joint-school/${item.slug}`), lastModified: lastmod(item) || now, changeFrequency: 'monthly', priority: 0.7 });
  }

  for (const item of procedures as any[]) {
    if (!item?.slug || MERGED_PROCEDURE_SLUGS.has(item.slug)) continue;
    entries.push({ url: url(`/procedure-surgery/${item.slug}`), lastModified: lastmod(item) || now, changeFrequency: 'monthly', priority: 0.7 });
  }

  for (const item of staff as any[]) {
    if (!item?.slug || item.slug === 'test-directus') continue;
    entries.push({ url: url(`/surgeons-staff/${item.slug}`), lastModified: lastmod(item) || now, changeFrequency: 'monthly', priority: 0.6 });
  }

  for (const item of publications as any[]) {
    if (!item?.slug) continue;
    entries.push({ url: url(`/publications/${item.slug}`), lastModified: lastmod(item) || now, changeFrequency: 'yearly', priority: 0.5 });
  }

  return entries;
}
