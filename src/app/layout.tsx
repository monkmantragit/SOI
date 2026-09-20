import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Suspense } from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AZIndex from '@/components/seo/AZIndex';
import { siteGraph } from '@/lib/seo/schema';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/lib/seo/site';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Orthopedic & Sports Injury Specialists in Bangalore`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["orthopedics", "sports medicine", "joint reconstruction", "bone", "joint", "surgery", "knee", "shoulder", "hip", "treatment", "bangalore", "hsr layout"],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  verification: {
    google: "WG2k4FYTe0K1OeP4FzV1OxFKmGUO0OJmsQUQveB-9zY",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  // NOTE: no site-wide `alternates.canonical` here — each route emits its own
  // canonical via safeCanonical(). A root "/" canonical previously made Google
  // treat every page as a duplicate of the homepage.
  openGraph: {
    title: `${SITE_NAME} | Orthopedic & Sports Injury Specialists in Bangalore`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Orthopedic & Sports Injury Specialists in Bangalore`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.svg" }
    ],
    shortcut: { url: "/favicon.svg" },
    apple: { url: "/logo.jpg" }
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#8B5C9E" },
  ],
  width: 'device-width',
  initialScale: 1,
  // Zoom re-enabled (was maximumScale:1 / userScalable:false — an accessibility
  // and mobile-usability problem).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <SchemaMarkup schema={siteGraph()} />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        {/*
          No root Suspense/Loading boundary here. It made notFound() and
          redirect() resolve to HTTP 200 for the whole app. Route-level
          loading.tsx / Suspense should be used where needed instead.
        */}
        <main suppressHydrationWarning>
          {children}
        </main>
        {/* Server-rendered A–Z directory band on every page (crawl paths).
            Suspense here wraps only the index, not children, so it does not
            affect page-level notFound()/redirect() status codes. */}
        <Suspense fallback={null}>
          {/* @ts-expect-error Async Server Component */}
          <AZIndex />
        </Suspense>
        <WhatsAppFloat />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              border: '1px solid var(--border)',
            },
            success: {
              style: {
                background: 'white',
                color: '#1f2937',
                border: '1px solid #e5e7eb',
              },
              iconTheme: {
                primary: '#22c55e',
                secondary: 'white',
              },
            },
          }}
        />
        {gaMeasurementId && <GoogleAnalytics gaId={gaMeasurementId} />}
      </body>
    </html>
  );
}
