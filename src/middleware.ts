import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "opnar_admin_session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();

  // allow login + register pages + their POSTs
  if (pathname === "/admin/login" || pathname === "/admin/register") {
    return NextResponse.next();
  }

  // allow Next internal assets
  if (pathname.startsWith("/_next")) return NextResponse.next();

  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
