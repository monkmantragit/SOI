import SchemaMarkup from '@/components/SchemaMarkup';
import {
  createOrganizationSchema,
  createMedicalClinicSchema,
  createWebSiteSchema,
  createBreadcrumbSchema,
  createFAQSchema,
} from '@/lib/schema/utils';
import HomePage from './homepage/page';
import HomeFaqs from '@/components/seo/HomeFaqs';
import { HOMEPAGE_FAQS } from '@/lib/seo/faqs';
import { safeCanonical } from '@/lib/seo/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: safeCanonical('/') },
};

export default function RootPage() {
  const schemas = [
    createOrganizationSchema(),
    createMedicalClinicSchema(),
    createWebSiteSchema(),
    createBreadcrumbSchema([
      { name: 'Home', url: 'https://sportsorthopedics.in' }
    ]),
    createFAQSchema(HOMEPAGE_FAQS),
  ];

  return (
    <>
      <SchemaMarkup schema={schemas} />
      <HomePage />
      <HomeFaqs faqs={HOMEPAGE_FAQS} />
    </>
  );
}
