import { Metadata } from 'next';
import { getProcedureSurgeryBySlug } from '@/lib/directus';
import { safeCanonical, stripStagingHost } from '@/lib/seo/site';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const procedure = await getProcedureSurgeryBySlug(params.slug);

  if (!procedure) {
    return {
      title: 'Procedure Not Found',
      description: 'The requested procedure could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const title = procedure.meta_title || `${procedure.title} | Orthopaedic Surgery`;
  const description = procedure.meta_description || procedure.description || 'Learn about this surgical procedure from our expert orthopedic team.';
  const imageUrl = stripStagingHost(procedure.featured_image_url) || '/images/default-procedure.jpg';
  const canonical = safeCanonical(`/procedure-surgery/${params.slug}`, procedure.canonical_url);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}