import BoardLink from "@/components/dashboard/BoardLink";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data, error } = await supabase
    .from("users")
    .select("id, boards (id, title, cover, users (avatar_url))")
    .eq("id", user.id)
    .single();

  if (error) throw error;

  return (
    <>
      {data?.boards.map((board) => (
        <BoardLink
          key={board.id}
          id={board.id}
          cover={board.cover}
          usersAvatars={board.users.map((value) => value.avatar_url)}
          name={board.title}
        />
      ))}
    </>
  );
}
