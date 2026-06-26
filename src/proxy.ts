import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Check if maintenance mode is enabled
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  // If not in maintenance mode, proceed normally
  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  // Check if the user has a valid bypass cookie
  const bypassCookie = request.cookies.get('maintenance_bypass');
  if (bypassCookie && bypassCookie.value === 'true') {
    return NextResponse.next();
  }

  // Exclude API routes and static files from maintenance mode rewrite
  // Also exclude the maintenance page if we were doing a redirect, but we are doing a rewrite.
  // Actually, we must not rewrite requests to our login API.
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/api/maintenance/login') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') // Exclude files with extensions (e.g. favicon.ico, images)
  ) {
    return NextResponse.next();
  }

  // Rewrite all other requests to the maintenance page
  return NextResponse.rewrite(new URL('/maintenance', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (except for specific endpoints we handle inside middleware)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
