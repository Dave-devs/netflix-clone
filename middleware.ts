import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isProtectedRoute = (path: string) => {
  return path.startsWith("/") || path.startsWith("/movies") || path.startsWith("/movies/:id");
};

export default clerkMiddleware(async (auth, req: NextRequest) => {
  if (isProtectedRoute(req.nextUrl.pathname)) {
    const { userId } = await auth();

    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|api/auth|auth/sign-in|auth/sign-up).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};