"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function createBoard({
  cover,
  title,
  visibility,
}: {
  cover: string;
  title: string;
  visibility: "public" | "private";
}) {
  const supabase = createServerActionClient({ cookies });

  const { error: bError, data } = await supabase
    .from("boards")
    .insert({ cover, title, visibility })
    .select("id");
  if (bError) throw bError;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error: mError } = await supabase
    .from("members")
    .insert({ user_id: user?.id, board_id: data[0].id });
  if (mError) throw mError;

  revalidatePath("/dashboard");
}
