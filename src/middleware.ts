import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('JWT_SECRET environment variable is required in production');
}

const PROD_HOST = 'sportsorthopedics.in';

const publicAdminPaths = [
  '/admin/login',
  '/api/admin/auth/login',
];

function isPublicAdminPath(pathname: string) {
  return publicAdminPaths.some(p => pathname === p || pathname.startsWith(p + '/'));
}

function adminAuth(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return null;
  }
  if (isPublicAdminPath(pathname)) {
    return null;
  }

  const token = request.cookies.get('admin_token')?.value;
  if (!token) {
    if (pathname.startsWith('/api/admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  // Edge runtime can't run jsonwebtoken's crypto. Token presence is checked here;
  // full verification happens in the Node.js API routes.
  return null;
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;
  const search = nextUrl.search;
  const host = (request.headers.get('host') || '').toLowerCase();

  // --- 1. Host canonicalisation: www -> non-www, http -> https (301). ---
  // Only enforce on the production domain so localhost / preview URLs are untouched.
  if (host === `www.${PROD_HOST}`) {
    return NextResponse.redirect(`https://${PROD_HOST}${pathname}${search}`, 301);
  }
  if (
    host === PROD_HOST &&
    nextUrl.protocol === 'http:' &&
    request.headers.get('x-forwarded-proto') === 'http'
  ) {
    return NextResponse.redirect(`https://${PROD_HOST}${pathname}${search}`, 301);
  }

  // --- 2. Collapse double slashes and strip trailing slash (308). ---
  if (pathname !== '/') {
    let normalized = pathname.replace(/\/{2,}/g, '/');
    if (normalized.length > 1) normalized = normalized.replace(/\/+$/, '');
    if (normalized !== pathname) {
      const target = nextUrl.clone();
      target.pathname = normalized;
      return NextResponse.redirect(target, 308);
    }
  }

  // --- 3. /blogs/<slug> -> /<slug> (308). The top-level slug is the ranking URL. ---
  // The /blogs index itself is preserved.
  const blogMatch = pathname.match(/^\/blogs\/([^/]+)\/?$/);
  if (blogMatch) {
    const target = nextUrl.clone();
    target.pathname = `/${blogMatch[1]}`;
    return NextResponse.redirect(target, 308);
  }

  // --- 4. Admin authentication (unchanged behaviour). ---
  const auth = adminAuth(request);
  if (auth) return auth;

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next internals and static assets.
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|favicon.svg|logo.jpg|logo.svg|og-image.jpg|sitemap.xml|robots.txt|site.webmanifest|embed.js|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|map|wav)$).*)',
  ],
};
