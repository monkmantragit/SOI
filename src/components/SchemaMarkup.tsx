/**
 * Server-rendered JSON-LD.
 *
 * Previously this used next/script with strategy="afterInteractive", which meant
 * the structured data was injected only after hydration — invisible to
 * Googlebot's first pass and to AI crawlers that never run JS. Rendering a plain
 * <script type="application/ld+json"> in the server component tree puts the JSON-LD
 * in the raw HTML.
 */

interface SchemaMarkupProps {
  schema: any | any[];
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const schemas = (Array.isArray(schema) ? schema : [schema]).filter(Boolean);

  return (
    <>
      {schemas.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          // JSON.stringify escapes nothing dangerous here; we additionally guard
          // against a stray </script> in text fields.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(s).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
