// SEO Directus migration.
//
// Adds the SEO custom fields the new templates can consume, and rewrites bad
// canonical_url values (staging host / www / http) to the production host.
//
// Usage:
//   npm run seo:migrate:dry   # print what would change, write nothing
//   npm run seo:migrate       # apply changes
//
// Requires env: NEXT_PUBLIC_DIRECTUS_URL and DIRECTUS_ADMIN_TOKEN.
//
// After running, add the new field names to the `fields: [...]` lists in
// src/lib/directus.ts so the app requests them (Directus 403s on unknown fields).

import {
  createDirectus,
  rest,
  staticToken,
  readFieldsByCollection,
  createField,
  readItems,
  updateItem,
} from '@directus/sdk';

const DRY = process.argv.includes('--dry');
const SITE_URL = 'https://sportsorthopedics.in';
const STAGING_HOST = '73n.0c8.myftpupload.com';

const url = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const token = process.env.DIRECTUS_ADMIN_TOKEN;

if (!url || !token) {
  console.error('ERROR: set NEXT_PUBLIC_DIRECTUS_URL and DIRECTUS_ADMIN_TOKEN in the environment.');
  process.exit(1);
}

const client = createDirectus(url).with(staticToken(token)).with(rest());

// Collections that should carry the SEO fields.
const COLLECTIONS = [
  'landing_pages',
  'blog_content',
  'educational_content',
  'medical_procedures',
  'staff_info',
  'publications',
];

// Field definitions to ensure on each collection.
const FIELDS = [
  {
    field: 'faq',
    type: 'json',
    meta: { interface: 'input-code', options: { language: 'json' }, note: 'FAQ array: [{question, answer}]', special: ['cast-json'] },
    schema: {},
  },
  {
    field: 'reviewed_by',
    type: 'string',
    meta: { interface: 'input', note: 'Medical reviewer byline, e.g. "Dr Naveen Kumar L V"' },
    schema: {},
  },
  {
    field: 'last_reviewed',
    type: 'date',
    meta: { interface: 'datetime', note: 'Date content was last medically reviewed' },
    schema: {},
  },
  {
    field: 'noindex',
    type: 'boolean',
    meta: { interface: 'boolean', note: 'If true, emit noindex on this page', special: ['cast-boolean'] },
    schema: { default_value: false },
  },
  {
    field: 'focus_keyword',
    type: 'string',
    meta: { interface: 'input', note: 'Primary target keyword' },
    schema: {},
  },
  {
    field: 'og_image',
    type: 'string',
    meta: { interface: 'input', note: 'Absolute URL of the Open Graph image' },
    schema: {},
  },
];

function badCanonical(value) {
  if (!value || typeof value !== 'string') return false;
  return (
    value.includes(STAGING_HOST) ||
    /^https?:\/\/www\.sportsorthopedics\.in/i.test(value) ||
    /^http:\/\/sportsorthopedics\.in/i.test(value)
  );
}

function fixCanonical(value) {
  return value
    .replace(new RegExp(`https?://(www\\.)?${STAGING_HOST.replace(/\./g, '\\.')}`, 'gi'), SITE_URL)
    .replace(/https?:\/\/www\.sportsorthopedics\.in/gi, SITE_URL)
    .replace(/^http:\/\//i, 'https://');
}

async function ensureFields(collection) {
  let existing = [];
  try {
    const fields = await client.request(readFieldsByCollection(collection));
    existing = fields.map((f) => f.field);
  } catch (e) {
    console.warn(`  ! Could not read fields for ${collection} (does the collection exist?):`, e?.message || e);
    return;
  }

  for (const def of FIELDS) {
    if (existing.includes(def.field)) {
      console.log(`  = ${collection}.${def.field} already exists`);
      continue;
    }
    if (DRY) {
      console.log(`  + [dry] would create ${collection}.${def.field} (${def.type})`);
      continue;
    }
    try {
      await client.request(createField(collection, def));
      console.log(`  + created ${collection}.${def.field} (${def.type})`);
    } catch (e) {
      console.warn(`  ! failed to create ${collection}.${def.field}:`, e?.message || e);
    }
  }
}

async function fixCanonicals(collection) {
  let items = [];
  try {
    items = await client.request(
      readItems(collection, { fields: ['id', 'slug', 'canonical_url'], limit: -1 })
    );
  } catch (e) {
    console.warn(`  ! Could not read items for ${collection}:`, e?.message || e);
    return;
  }
  let fixed = 0;
  for (const item of items) {
    if (badCanonical(item.canonical_url)) {
      const next = fixCanonical(item.canonical_url);
      if (next === item.canonical_url) continue;
      if (DRY) {
        console.log(`  ~ [dry] ${collection}#${item.id}: ${item.canonical_url} -> ${next}`);
      } else {
        try {
          await client.request(updateItem(collection, item.id, { canonical_url: next }));
          console.log(`  ~ ${collection}#${item.id}: -> ${next}`);
        } catch (e) {
          console.warn(`  ! failed to update ${collection}#${item.id}:`, e?.message || e);
        }
      }
      fixed++;
    }
  }
  if (!fixed) console.log(`  = ${collection}: no bad canonical_url values`);
}

async function main() {
  console.log(`SEO migration ${DRY ? '(DRY RUN)' : '(APPLYING)'} against ${url}\n`);

  for (const collection of COLLECTIONS) {
    console.log(`Collection: ${collection}`);
    await ensureFields(collection);
    await fixCanonicals(collection);
    console.log('');
  }

  console.log('Done.');
  if (DRY) console.log('This was a dry run. Re-run without --dry to apply.');
  console.log(
    '\nNext: add these field names to the `fields: [...]` lists in src/lib/directus.ts:\n' +
    '  faq, reviewed_by, last_reviewed, noindex, focus_keyword, og_image'
  );
}

main().catch((e) => {
  console.error('Migration failed:', e);
  process.exit(1);
});
