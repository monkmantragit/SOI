import { notFound } from 'next/navigation';
import { getLandingPageBySlug, getPostBySlug, getLandingPages, getBlogPosts } from '@/lib/directus';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { getImageUrl } from '@/lib/directus';
import Image from 'next/image';
import SchemaMarkup from '@/components/SchemaMarkup';
import ReviewedBy from '@/components/seo/ReviewedBy';
import RelatedContent, { DEFAULT_RELATED } from '@/components/seo/RelatedContent';
import { safeCanonical, stripStagingHost, SITE_URL, PRIMARY_DOCTOR } from '@/lib/seo/site';
import { createArticleSchema, createBreadcrumbSchema, sanitizeForSchema } from '@/lib/schema/utils';
import { webPageNode, breadcrumbNode, graph } from '@/lib/seo/schema';

// Revalidate every 5 minutes for fresh content.
export const revalidate = 300;

// Slugs that are owned by dedicated static routes (src/app/(static)/... and other
// top-level routes). The [slug] catch-all must NOT pre-render these, or the build
// collides with the static route and emits a 404 for that path.
const RESERVED_SLUGS = new Set([
  'acl-reconstruction-and-meniscus-repair',
  'acl-reconstruction-surgery-in-bangalore',
  'acl-tear-laser-therapy',
  'appointment-booking-info',
  'arthroscopic-debridement-guide-procedure-and-recovery',
  'meniscus-tear-exercises-to-avoid',
  'robotic-knee-replacement-surgeon-in-bangalore',
  'stages-of-avascular-necrosis-symptoms-and-treatments',
  'total-hip-replacement-in-bangalore',
  'total-knee-replacement-in-bangalore',
  // Other top-level static routes.
  'blogs', 'bone-joint-school', 'procedure-surgery', 'surgeons-staff',
  'publications', 'clinical-videos', 'gallery', 'contact', 'physiotherapy',
  'fellowship-programme', 'book-appointment', 'widget', 'admin', 'homepage',
  'our-alumni', 'search',
]);

// Pre-render landing pages and blog posts at build; other slugs fall back to ISR.
export async function generateStaticParams() {
  try {
    const [landers, blogs] = await Promise.all([
      getLandingPages().catch(() => []),
      getBlogPosts().catch(() => []),
    ]);
    const slugs = new Set<string>();
    for (const l of landers as any[]) if (l?.slug && !RESERVED_SLUGS.has(l.slug)) slugs.add(l.slug);
    for (const b of blogs as any[]) if (b?.slug && !RESERVED_SLUGS.has(b.slug)) slugs.add(b.slug);
    return [...slugs].map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

interface LandingPageProps {
  params: {
    slug: string;
  };
}

export default async function LandingPage({ params }: LandingPageProps) {
  // First try to fetch as a landing page
  const landingPage = await getLandingPageBySlug(params.slug);
  
  // If no landing page found, try to fetch as a blog post
  if (!landingPage) {
    const blogPost = await getPostBySlug(params.slug);
    
    // If blog post found, render it
    if (blogPost) {
      const canonicalUrl = safeCanonical(`/${params.slug}`, blogPost.canonical_url);
      const blogSchemas = [
        createArticleSchema({
          headline: blogPost.title,
          description: blogPost.excerpt || sanitizeForSchema(blogPost.content_text),
          image: stripStagingHost(blogPost.featured_image_url),
          datePublished: blogPost.date_created,
          dateModified: blogPost.date_updated || blogPost.date_created,
          articleBody: sanitizeForSchema(blogPost.content_text),
          keywords: blogPost.category ? [blogPost.category] : undefined,
          url: canonicalUrl,
          author: { name: PRIMARY_DOCTOR.name, url: `${SITE_URL}/surgeons-staff/naveen` },
          // @ts-ignore - reviewedBy for E-E-A-T
          reviewedBy: { '@type': 'Person', name: PRIMARY_DOCTOR.name, url: `${SITE_URL}/surgeons-staff/naveen` },
        }),
        createBreadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blogs` },
          { name: blogPost.title },
        ]),
      ];
      return (
        <div className="min-h-screen bg-tint-expertise">
          <SchemaMarkup schema={blogSchemas} />
          <SiteHeader />

          {/* Blog Post Hero */}
          <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-soi-navy-800 to-soi-purple-800">
            {blogPost.featured_image_url && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={stripStagingHost(blogPost.featured_image_url)}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            )}
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  {blogPost.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-white/80">
                  <time dateTime={blogPost.date_created}>
                    {new Date(blogPost.date_created).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {blogPost.reading_time && (
                    <>
                      <span>•</span>
                      <span>{blogPost.reading_time} min read</span>
                    </>
                  )}
                  {blogPost.category && (
                    <>
                      <span>•</span>
                      <span>{blogPost.category}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <ReviewedBy updated={blogPost.date_updated || blogPost.date_created} className="mb-8 pb-6 border-b border-gray-200" />
              <article className="prose prose-lg max-w-none prose-headings:text-soi-navy-800 prose-links:text-soi-purple-600 prose-strong:text-soi-navy-700">
                {blogPost.content_html ? (
                  <div dangerouslySetInnerHTML={{ __html: stripStagingHost(blogPost.content_html) }} />
                ) : (
                  <p>{blogPost.content_text}</p>
                )}
              </article>
            </div>
          </section>

          <SiteFooter />
        </div>
      );
    }
    
    // If neither landing page nor blog post found, show 404
    notFound();
  }

  const landingCanonical = safeCanonical(`/${params.slug}`, landingPage.canonical_url);
  const landingSchema = graph([
    webPageNode({
      url: landingCanonical,
      name: landingPage.meta_title || landingPage.title,
      description: landingPage.meta_description || landingPage.content_text?.substring(0, 160),
      type: 'MedicalWebPage',
      dateModified: landingPage.date_updated || landingPage.date_created,
      breadcrumbId: `${landingCanonical}#breadcrumb`,
    }),
    breadcrumbNode(
      [
        { name: 'Home', url: SITE_URL },
        { name: landingPage.title },
      ],
      `${landingCanonical}#breadcrumb`
    ),
  ]);

  return (
    <div className="min-h-screen bg-tint-authority">
      <SchemaMarkup schema={landingSchema} />
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-soi-navy-800 to-soi-purple-800">
        {landingPage.featured_image_url && (
          <div className="absolute inset-0 z-0">
            <Image
              src={stripStagingHost(getImageUrl(landingPage.featured_image_url))}
              alt={landingPage.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {landingPage.title}
            </h1>
            {landingPage.content_text && (
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {landingPage.content_text.substring(0, 200)}...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewedBy updated={landingPage.date_updated || landingPage.date_created} className="mb-8 pb-6 border-b border-gray-200" />
          {landingPage.content_html ? (
            <div
              className="prose prose-lg max-w-none prose-headings:text-soi-navy-800 prose-links:text-soi-purple-600 prose-strong:text-soi-navy-700"
              dangerouslySetInnerHTML={{ __html: stripStagingHost(landingPage.content_html) }}
            />
          ) : (
            <div className="prose prose-lg max-w-none prose-headings:text-soi-navy-800 prose-links:text-soi-purple-600 prose-strong:text-soi-navy-700">
              <p>{landingPage.content_text}</p>
            </div>
          )}
        </div>
      </section>

      <RelatedContent links={DEFAULT_RELATED} />

      <SiteFooter />
    </div>
  );
}

// Generate metadata for the page
export async function generateMetadata({ params }: LandingPageProps) {
  // First try landing page
  const landingPage = await getLandingPageBySlug(params.slug);

  if (landingPage) {
    const canonical = safeCanonical(`/${params.slug}`, landingPage.canonical_url);
    return {
      title: landingPage.meta_title || landingPage.title,
      description: landingPage.meta_description || landingPage.content_text?.substring(0, 160),
      alternates: { canonical },
      openGraph: {
        title: landingPage.meta_title || landingPage.title,
        description: landingPage.meta_description || landingPage.content_text?.substring(0, 160),
        url: canonical,
        images: landingPage.featured_image_url ? [stripStagingHost(getImageUrl(landingPage.featured_image_url))] : [],
      },
    };
  }

  // Try blog post
  const blogPost = await getPostBySlug(params.slug);

  if (blogPost) {
    const canonical = safeCanonical(`/${params.slug}`, blogPost.canonical_url);
    return {
      title: blogPost.meta_title || blogPost.title,
      description: blogPost.meta_description || blogPost.excerpt || blogPost.content_text?.substring(0, 160),
      alternates: { canonical },
      openGraph: {
        title: blogPost.meta_title || blogPost.title,
        description: blogPost.meta_description || blogPost.excerpt || blogPost.content_text?.substring(0, 160),
        url: canonical,
        images: blogPost.featured_image_url ? [stripStagingHost(blogPost.featured_image_url)] : [],
      },
    };
  }

  return {
    title: 'Page Not Found',
    robots: { index: false, follow: false },
  };
}