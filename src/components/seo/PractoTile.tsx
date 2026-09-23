import { Star } from 'lucide-react';
import { PRACTO } from '@/lib/seo/site';

/**
 * Homepage social-proof tile: the verified Practo rating (5.0 across 1,533
 * patient stories). Reinforces the AggregateRating in the schema graph.
 */
export default function PractoTile() {
  return (
    <section className="bg-white pt-10">
      <div className="container mx-auto px-4">
        <a
          href={PRACTO.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 rounded-2xl border border-soi-pink-100 bg-gradient-to-r from-soi-pink-50 to-white px-6 py-5 text-center shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:gap-6 sm:text-left"
        >
          {/* Children reset wrapping: url-break.css forces break-all on a[href*="http"] */}
          <div className="flex shrink-0 items-center gap-3 whitespace-nowrap break-normal [line-break:auto]">
            <span className="text-4xl font-bold leading-none text-soi-navy-800">
              {PRACTO.ratingValue.toFixed(1)}
            </span>
            <div className="flex flex-col">
              <span className="flex text-amber-500" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </span>
              <span className="text-xs uppercase tracking-wider text-soi-navy-500">
                Rating on Practo
              </span>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-soi-pink-100 sm:block" />
          <p className="break-normal text-sm text-soi-navy-700 [hyphens:manual] [line-break:auto]">
            <span className="font-semibold text-soi-navy-800">
              {PRACTO.reviewCount.toLocaleString('en-IN')}+ patient stories
            </span>{' '}
            for Dr Naveen Kumar L V — trusted for ACL, knee &amp; shoulder care in Bangalore.
          </p>
        </a>
      </div>
    </section>
  );
}
