import type { Metadata } from 'next';

// The widget is an embeddable utility surface, not a search landing page.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
