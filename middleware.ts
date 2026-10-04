import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Xử lý lấy subdomain
  const currentHost = hostname
    .replace(`.cuonghuefoods.com`, '')
    .replace(`.localhost:3000`, '');

  if (currentHost === 'admin') {
    url.pathname = `/admin${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (currentHost === 'staff') {
    url.pathname = `/staff${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (currentHost === 'link') {
    url.pathname = `/link${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};