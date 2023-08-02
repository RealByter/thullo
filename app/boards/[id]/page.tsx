import BoardNavbar from "@/components/board/navbar/BoardNavbar";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type MembersType = Database["public"]["Tables"]["users"]["Row"][]

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data, error } = await supabase
    .from("boards")
    .select(
      "id, title, description, visibility, cover, made_by (id, username, full_name, avatar_url), lists (id, name, created_at, cards (id, name, cover, description)), members:users!members (id, username, full_name, avatar_url)",
    )
    .eq("id", params.id)
    .single();

  if (error) throw error;

  console.log(data);

  return <div className="flex flex-col gap-6"><BoardNavbar visibility={data.visibility} setVisibility={(newVisibility: string) => {}} members={data.members as MembersType}/></div>;
}
