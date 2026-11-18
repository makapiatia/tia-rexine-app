import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE, isValidToken } from "@/lib/site-auth";

export async function proxy(request: NextRequest) {
  const authed = await isValidToken(request.cookies.get(AUTH_COOKIE)?.value);
  const onUnlockPage = request.nextUrl.pathname === "/unlock";

  if (authed && onUnlockPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!authed && !onUnlockPage) {
    return NextResponse.redirect(new URL("/unlock", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Everything except Next internals and the assets the unlock page itself needs.
    "/((?!_next/static|_next/image|favicon\\.ico|trex-icon\\.png|mountain_haze\\.JPG).*)",
  ],
};
