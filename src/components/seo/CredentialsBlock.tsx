import { BadgeCheck, Award, Star } from 'lucide-react';
import { PRIMARY_DOCTOR, PRACTO } from '@/lib/seo/site';

/**
 * Visible "Credentials & Verification" panel for surgeon pages. Surfaces the
 * KMC registration, degrees, memberships and the Practo rating — the E-E-A-T
 * signals search and answer engines look for.
 */
export default function CredentialsBlock() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-soi-pink-100">
      <div className="flex items-center mb-4">
        <BadgeCheck className="h-5 w-5 text-soi-pink-500 mr-2" />
        <h2 className="text-xl font-bold text-soi-navy-800">Credentials &amp; Verification</h2>
      </div>

      <dl className="space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-soi-navy-500">Qualifications</dt>
          <dd className="font-medium text-soi-navy-800 text-right">{PRIMARY_DOCTOR.degrees}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-soi-navy-500">Registration</dt>
          <dd className="font-medium text-soi-navy-800 text-right">
            Karnataka Medical Council &mdash; KMC {PRIMARY_DOCTOR.kmc}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-soi-navy-500 flex items-center gap-1">
            <Star className="h-4 w-4 text-amber-500" /> Patient rating
          </dt>
          <dd className="font-medium text-soi-navy-800 text-right">
            {PRACTO.ratingValue.toFixed(1)} / 5 &middot; {PRACTO.reviewCount.toLocaleString('en-IN')} stories on Practo
          </dd>
        </div>
      </dl>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-2 text-soi-navy-700">
          <Award className="h-4 w-4 text-soi-pink-500" />
          <span className="text-sm font-semibold">Professional memberships</span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {PRIMARY_DOCTOR.memberships.map((m) => (
            <li
              key={m}
              className="rounded-full bg-soi-pink-50 border border-soi-pink-100 px-3 py-1 text-xs text-soi-navy-700"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
