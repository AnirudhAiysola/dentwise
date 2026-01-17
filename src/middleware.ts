// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const RATE_LIMIT = 100;
const WINDOW_MS = 60_000;

const store = new Map<string, { count: number; start: number }>();

export default clerkMiddleware((auth, req: NextRequest) => {
  // Rate limiting (IP-based)
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now - entry.start > WINDOW_MS) {
    store.set(ip, { count: 1, start: now });
    return NextResponse.next();
  }

  if (entry.count >= RATE_LIMIT) {
    return new NextResponse("Too many requests. Try again later.", {
      status: 429,
    });
  }

  entry.count++;
  return NextResponse.next();
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
  // matcher: ["/api/:path*"],
};
