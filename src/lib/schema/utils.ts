import type {
  Organization,
  MedicalClinic,
  Person,
  Physician,
  Article,
  BlogPosting,
  BreadcrumbList,
  VideoObject,
  MedicalProcedure,
  FAQPage,
  ImageGallery,
  WebSite,
  LocalBusiness,
  EducationalOccupationalProgram,
  PostalAddress,
  GeoCoordinates,
  OpeningHoursSpecification,
  MedicalScholarlyArticle,
} from './types';
import { NAP, OPENING_HOURS as SITE_HOURS, SITE_NAME, SITE_URL, SITE_DESCRIPTION, SOCIAL, LOGO_URL } from '@/lib/seo/site';

export const ORGANIZATION_INFO = {
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  description: SITE_DESCRIPTION,
  telephone: NAP.phone,
  email: NAP.email,
  foundingDate: '2010-01-01',
  sameAs: [...SOCIAL],
};

export const ADDRESS_INFO: PostalAddress = {
  '@type': 'PostalAddress',
  streetAddress: NAP.street,
  addressLocality: NAP.locality,
  addressRegion: NAP.region,
  postalCode: NAP.postalCode,
  addressCountry: NAP.country
};

export const GEO_COORDINATES: GeoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: NAP.geo.lat,
  longitude: NAP.geo.lng
};

export const OPENING_HOURS: OpeningHoursSpecification[] = SITE_HOURS.map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: [...h.days],
  opens: h.opens,
  closes: h.closes,
}));

export function createOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: ORGANIZATION_INFO.name,
    url: ORGANIZATION_INFO.url,
    logo: ORGANIZATION_INFO.logo,
    description: ORGANIZATION_INFO.description,
    telephone: ORGANIZATION_INFO.telephone,
    email: ORGANIZATION_INFO.email,
    foundingDate: ORGANIZATION_INFO.foundingDate,
    sameAs: ORGANIZATION_INFO.sameAs,
    address: ADDRESS_INFO,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: GEO_COORDINATES,
      geoRadius: '50km'
    }
  };
}

export function createMedicalClinicSchema(): MedicalClinic {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: ORGANIZATION_INFO.name,
    url: ORGANIZATION_INFO.url,
    logo: ORGANIZATION_INFO.logo,
    image: [
      'https://sportsorthopedics.in/images/clinic-exterior.jpg',
      'https://sportsorthopedics.in/images/clinic-interior.jpg'
    ],
    description: ORGANIZATION_INFO.description,
    address: ADDRESS_INFO,
    geo: GEO_COORDINATES,
    telephone: ORGANIZATION_INFO.telephone,
    email: ORGANIZATION_INFO.email,
    openingHoursSpecification: OPENING_HOURS,
    priceRange: '₹₹₹',
    medicalSpecialty: ['Orthopedic', 'SportsMedicine'],
    availableService: [
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'ACL Reconstruction',
        description: 'Surgical reconstruction of the anterior cruciate ligament'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Total Knee Replacement',
        description: 'Complete replacement of the knee joint'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Hip Replacement',
        description: 'Surgical replacement of the hip joint'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Sports Injury Treatment',
        description: 'Comprehensive treatment for sports-related injuries'
      }
    ]
  };
}

export function createLocalBusinessSchema(): LocalBusiness {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': ORGANIZATION_INFO.url,
    name: ORGANIZATION_INFO.name,
    image: ORGANIZATION_INFO.logo,
    url: ORGANIZATION_INFO.url,
    telephone: ORGANIZATION_INFO.telephone,
    priceRange: '₹₹₹',
    address: ADDRESS_INFO,
    geo: GEO_COORDINATES,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: ORGANIZATION_INFO.sameAs
  };
}

export function createWebSiteSchema(): WebSite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${ORGANIZATION_INFO.url}/#website`,
    url: ORGANIZATION_INFO.url,
    name: ORGANIZATION_INFO.name,
    description: ORGANIZATION_INFO.description,
    publisher: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: ORGANIZATION_INFO.name,
      logo: ORGANIZATION_INFO.logo
    },
    potentialAction: [
      {
        '@context': 'https://schema.org',
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${ORGANIZATION_INFO.url}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    ],
    inLanguage: 'en-US'
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && index < items.length - 1 ? { item: item.url } : {})
    }))
  };
}

export function createArticleSchema(data: {
  headline: string;
  description?: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  author?: Partial<Person>;
  articleBody?: string;
  keywords?: string[];
  url?: string;
}): BlogPosting {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: data.author?.name || ORGANIZATION_INFO.name,
      url: data.author?.url || ORGANIZATION_INFO.url,
      ...data.author
    },
    publisher: createOrganizationSchema(),
    mainEntityOfPage: data.url ? {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': data.url
    } : undefined,
    articleBody: data.articleBody,
    keywords: data.keywords,
    inLanguage: 'en-US'
  };
}

export function createVideoSchema(data: {
  name: string;
  description?: string;
  thumbnailUrl?: string | string[];
  uploadDate?: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}): VideoObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
    duration: data.duration,
    contentUrl: data.contentUrl,
    embedUrl: data.embedUrl
  };
}

export function createPhysicianSchema(data: {
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  description?: string;
  medicalSpecialty?: string[];
  hospitalAffiliation?: Array<{ name: string; url?: string }>;
  alumniOf?: Array<{ name: string; url?: string }>;
}): Physician {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: data.name,
    url: data.url,
    image: data.image,
    jobTitle: data.jobTitle,
    description: data.description,
    worksFor: createMedicalClinicSchema(),
    medicalSpecialty: data.medicalSpecialty as any,
    hospitalAffiliation: data.hospitalAffiliation?.map(h => ({
      '@type': 'Hospital' as const,
      name: h.name,
      url: h.url
    })),
    alumniOf: data.alumniOf?.map(a => ({
      '@type': 'EducationalOrganization' as const,
      name: a.name,
      url: a.url
    })),
    sameAs: []
  };
}

export function createMedicalProcedureSchema(data: {
  name: string;
  description?: string;
  procedureType?: string;
  bodyLocation?: string;
  followup?: string;
  preparation?: string;
}): MedicalProcedure {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: data.name,
    description: data.description,
    procedureType: data.procedureType as any,
    bodyLocation: data.bodyLocation,
    followup: data.followup,
    preparation: data.preparation
  };
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@context': 'https://schema.org',
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@context': 'https://schema.org',
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function createImageGallerySchema(data: {
  name: string;
  description?: string;
  images: Array<{ url: string; caption?: string; name?: string }>;
}): ImageGallery {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: data.name,
    description: data.description,
    image: data.images.map(img => ({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: img.url,
      caption: img.caption,
      name: img.name
    }))
  };
}

export function createEducationalProgramSchema(data: {
  name: string;
  description?: string;
  url?: string;
  programType?: string;
}): EducationalOccupationalProgram {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: data.name,
    description: data.description,
    provider: createOrganizationSchema(),
    url: data.url,
    educationalProgramMode: 'Blended',
    programType: data.programType
  };
}

export function createPublicationSchema(data: {
  title: string;
  authors?: string;
  publicationDate?: string;
  description?: string;
  url?: string;
  publicationType?: string;
}): MedicalScholarlyArticle {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    headline: data.title,
    author: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: data.authors || ORGANIZATION_INFO.name
    },
    datePublished: data.publicationDate || new Date().toISOString(),
    description: data.description,
    publisher: createOrganizationSchema(),
    mainEntityOfPage: data.url ? {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': data.url
    } : undefined,
    publicationType: data.publicationType,
    inLanguage: 'en-US'
  };
}

export function generateSchemaScript(schema: any | any[]): string {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return schemas.map(s => 
    `<script type="application/ld+json">${JSON.stringify(s, null, 2)}</script>`
  ).join('\n');
}

export function sanitizeForSchema(text: string | null | undefined): string {
  if (!text) return '';
  
  return text
    .replace(/<[^>]*>/g, '') 
    .replace(/\s+/g, ' ')
    .replace(/"/g, '\\"')
    .trim()
    .slice(0, 500); 
}