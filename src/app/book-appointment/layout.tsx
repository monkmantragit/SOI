import type { Metadata } from 'next';

// Transactional booking flow — noindex so it doesn't compete with landers.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function BookAppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
