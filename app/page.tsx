import BoardLink from "@/components/BoardLink";
import Button from "@/components/Button";
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
    .select("id, boards (id, name, photo, users (avatar_url))")
    .eq("id", user.id)
    .single();

  if (error) console.log("error: ", error);
  else {
    console.log(data);
    console.log(data.boards[0].users);
  }

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="flex justify-between">
        <h1 className="text-lg font-medium">All Boards</h1>
        <Button>+ Add Board</Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mt-10">
        {data ? (
          <BoardLink
            id={data.boards[0].id}
            photo={data.boards[0].photo}
            usersAvatars={data.boards[0].users.map((value) => value.avatar_url)}
            name={data.boards[0].name}
          />
        ) : (
          <div>skeleton</div>
        )}
        {data ? (
          <BoardLink
            id={data.boards[0].id}
            photo={data.boards[0].photo}
            usersAvatars={data.boards[0].users.map((value) => value.avatar_url)}
            name={data.boards[0].name}
          />
        ) : (
          <div>skeleton</div>
        )}
        {data ? (
          <BoardLink
            id={data.boards[0].id}
            photo={data.boards[0].photo}
            usersAvatars={data.boards[0].users.map((value) => value.avatar_url)}
            name={data.boards[0].name}
          />
        ) : (
          <div>skeleton</div>
        )}
        {data ? (
          <BoardLink
            id={data.boards[0].id}
            photo={data.boards[0].photo}
            usersAvatars={data.boards[0].users.map((value) => value.avatar_url)}
            name={data.boards[0].name}
          />
        ) : (
          <div>skeleton</div>
        )}
        {data ? (
          <BoardLink
            id={data.boards[0].id}
            photo={data.boards[0].photo}
            usersAvatars={data.boards[0].users.map((value) => value.avatar_url)}
            name={data.boards[0].name}
          />
        ) : (
          <div>skeleton</div>
        )}
      </div>
    </div>
  );
}
