import type { Faq } from '@/lib/seo/faqs';

/**
 * Visible FAQ section (server-rendered, zero-JS <details> accordion). Its text
 * matches the FAQPage structured data emitted on the same page.
 */
export default function HomeFaqs({ faqs }: { faqs: Faq[] }) {
  if (!faqs?.length) return null;

  return (
    <section className="bg-white py-16" aria-labelledby="home-faq-heading">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 id="home-faq-heading" className="text-3xl font-bold text-soi-navy-800 mb-2 text-center">
          Frequently asked questions
        </h2>
        <p className="text-soi-navy-600 text-center mb-8">
          Orthopedic care in HSR Layout, Bangalore — the things patients ask us most.
        </p>

        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
          {faqs.map((faq, i) => (
            <details key={i} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-3 font-medium text-soi-navy-800">
                {faq.question}
                <span className="text-soi-pink-500 transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-soi-navy-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
