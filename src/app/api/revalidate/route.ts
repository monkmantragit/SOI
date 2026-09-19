import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

/**
 * On-demand revalidation endpoint for a Directus Flow webhook.
 *
 * Directus content is cached with `next: { revalidate: 300, tags: ['directus'] }`.
 * When an editor publishes in Directus, a Flow can POST here to purge that cache
 * immediately instead of waiting up to 5 minutes.
 *
 * Auth: send the shared secret as `?secret=...`, an `x-revalidate-secret` header,
 * or a Bearer token. Configure REVALIDATE_SECRET in the environment.
 *
 * Optional body: { "path": "/acl-reconstruction-surgery-in-bangalore" } to also
 * revalidate a specific path.
 */
export const dynamic = 'force-dynamic';

function getSecret(request: NextRequest): string | null {
  const url = new URL(request.url);
  const fromQuery = url.searchParams.get('secret');
  if (fromQuery) return fromQuery;
  const header = request.headers.get('x-revalidate-secret');
  if (header) return header;
  const auth = request.headers.get('authorization');
  if (auth?.startsWith('Bearer ')) return auth.slice(7).trim();
  return null;
}

async function handle(request: NextRequest) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json(
      { revalidated: false, message: 'REVALIDATE_SECRET is not configured' },
      { status: 500 }
    );
  }

  const provided = getSecret(request);
  if (!provided || provided !== expected) {
    return NextResponse.json({ revalidated: false, message: 'Invalid secret' }, { status: 401 });
  }

  revalidateTag('directus');

  // Optionally revalidate a specific path if one was supplied.
  let path: string | undefined;
  try {
    const body = await request.json();
    if (body && typeof body.path === 'string') path = body.path;
  } catch {
    // no body / not JSON — tag revalidation is enough.
  }
  if (path) revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    tag: 'directus',
    ...(path ? { path } : {}),
    now: Date.now(),
  });
}

export async function POST(request: NextRequest) {
  return handle(request);
}

// Allow GET too, so a webhook that can only issue GETs still works.
export async function GET(request: NextRequest) {
  return handle(request);
}
