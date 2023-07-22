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
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg font-medium">All Boards</h1>
        <Button>+ Add Board</Button>
      </div>
    </div>
  );
}
