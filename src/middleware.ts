import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isRootRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
  // Allow signed out users to access the specified routes:
  if (isRootRoute(req)) auth().protect();

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

