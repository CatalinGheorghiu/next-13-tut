import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Create a NextResponse object
  const res = NextResponse.next();
  // Create a Supabase client
  const supabase = createMiddlewareClient({ req, res });
  // Refresh session & update the cookie
  await supabase.auth.getSession();

  return res;
}
