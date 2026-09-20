import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/procedure-surgery', label: 'Procedures & Surgery' },
    { href: '/bone-joint-school', label: 'Bone & Joint School' },
    { href: '/surgeons-staff', label: 'Our Surgeons' },
    { href: '/contact', label: 'Contact & Appointments' },
  ];

  return (
    <>
      <SiteHeader />
      <main className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-xl text-center">
          <p className="text-6xl font-bold text-[#8B5C9E]">404</p>
          <h1 className="mt-4 text-2xl font-semibold text-soi-navy-800">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-3 text-soi-navy-600">
            The page may have moved or no longer exists. Try one of these instead:
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-full border border-soi-pink-200 bg-white px-4 py-2 text-sm font-medium text-soi-navy-700 hover:border-soi-pink-400 hover:text-soi-pink-600"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
