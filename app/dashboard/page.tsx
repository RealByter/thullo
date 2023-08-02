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

  // const { data, error } = await supabase
  //   .from("users")
  //   .select("id, boards (id, title, cover, created_at, users (avatar_url))")
  //   .eq("id", user.id)
  //   .single();
  const { data: boardsData, error } = await supabase
    .from("boards")
    .select("id, title, cover, created_at, users (id, avatar_url)");

  if (error) throw error;

  const data = boardsData?.filter((board) =>
    board.users.find((u) => (u.id = user.id)),
  );

  return (
    <>
      {data
        ?.sort((a, b) => {
          const aTime = new Date(a.created_at).getTime();
          const bTime = new Date(b.created_at).getTime();
          if (aTime < bTime) return -1;
          else if (aTime > bTime) return 1;
          else return 0;
        })
        .map((board) => (
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
