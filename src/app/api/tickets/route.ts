import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const ticket = await request.json();
  // get supabase instance
  const supabase = createRouteHandlerClient({ cookies });

  // get the user current session
  const {
    data: { session }
  } = await supabase.auth.getSession();
  // insert the ticket into the database
  const { data, error } = await supabase
    .from("Tickets")
    .insert({
      ...ticket,
      user_email: session?.user?.email
    })
    .select()
    .single();
  return NextResponse.json({ data, error });
}
