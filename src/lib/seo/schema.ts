/**
 * JSON-LD @graph builders.
 *
 * Every page renders a single @graph. The Organization / MedicalClinic /
 * LocalBusiness and WebSite nodes are site-wide (injected from the root layout);
 * page templates add their own nodes (MedicalWebPage, MedicalProcedure,
 * Physician, BlogPosting, FAQPage, BreadcrumbList, …) referencing the shared
 * @ids.
 */
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  NAP,
  OPENING_HOURS,
  SOCIAL,
  LOGO_URL,
  PRACTO,
  absoluteUrl,
} from './site';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;

type Node = Record<string, any>;

/** Wrap a list of nodes in a single @graph document. */
export function graph(nodes: (Node | null | undefined)[]): Node {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  };
}

function postalAddress(): Node {
  return {
    '@type': 'PostalAddress',
    streetAddress: NAP.street,
    addressLocality: NAP.locality,
    addressRegion: NAP.region,
    postalCode: NAP.postalCode,
    addressCountry: NAP.country,
  };
}

function geo(): Node {
  return {
    '@type': 'GeoCoordinates',
    latitude: NAP.geo.lat,
    longitude: NAP.geo.lng,
  };
}

function openingHours(): Node[] {
  return OPENING_HOURS.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [...h.days],
    opens: h.opens,
    closes: h.closes,
  }));
}

/** Organization / MedicalClinic / LocalBusiness — the practice as an entity. */
export function organizationNode(): Node {
  return {
    '@type': ['MedicalClinic', 'MedicalOrganization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL + '/',
    logo: { '@type': 'ImageObject', '@id': `${SITE_URL}/#logo`, url: LOGO_URL },
    image: { '@id': `${SITE_URL}/#logo` },
    description: SITE_DESCRIPTION,
    telephone: NAP.phone,
    email: NAP.email,
    priceRange: NAP.priceRange,
    address: postalAddress(),
    geo: geo(),
    hasMap: NAP.mapsUrl,
    openingHoursSpecification: openingHours(),
    medicalSpecialty: ['Orthopedic', 'SportsMedicine'],
    areaServed: { '@type': 'City', name: 'Bengaluru' },
    sameAs: [...SOCIAL],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: PRACTO.ratingValue,
      reviewCount: PRACTO.reviewCount,
      bestRating: PRACTO.bestRating,
      worstRating: PRACTO.worstRating,
    },
  };
}

/** WebSite node with a SearchAction. */
export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL + '/',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };
}

/** The site-wide graph injected on every page from the root layout. */
export function siteGraph(): Node {
  return graph([organizationNode(), websiteNode()]);
}

/** A WebPage / MedicalWebPage node for the current page. */
export function webPageNode(opts: {
  url: string;
  name: string;
  description?: string;
  type?: 'WebPage' | 'MedicalWebPage';
  datePublished?: string;
  dateModified?: string;
  breadcrumbId?: string;
  primaryImage?: string;
}): Node {
  const url = absoluteUrl(opts.url);
  return {
    '@type': opts.type || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    ...(opts.primaryImage ? { primaryImageOfPage: opts.primaryImage } : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    ...(opts.breadcrumbId ? { breadcrumb: { '@id': opts.breadcrumbId } } : {}),
    inLanguage: 'en-IN',
  };
}

/** BreadcrumbList node. Last item omits `item` per Google's guidance. */
export function breadcrumbNode(
  items: Array<{ name: string; url?: string }>,
  id?: string
): Node {
  return {
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': id } : {}),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && index < items.length - 1 ? { item: absoluteUrl(item.url) } : {}),
    })),
  };
}

/** FAQPage node. */
export function faqNode(faqs: Array<{ question: string; answer: string }>): Node | null {
  const clean = (faqs || []).filter((f) => f && f.question && f.answer);
  if (!clean.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: clean.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
