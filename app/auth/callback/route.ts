import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  
  const code = requestUrl.searchParams.get("code");
  console.log("Callback Code:", code);

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log("Exchange Data:", data);
    console.log("Exchange Error:", error);
  }

  // URL to redirect to after sign-in process completes
  return NextResponse.redirect(requestUrl.origin);
}
