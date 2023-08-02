import IconButton from "@/components/IconButton";
import { Database } from "@/types/supabase";
import { LuGlobe2, LuLock } from "react-icons/lu";

type MemberType = Database["public"]["Tables"]["users"]["Row"];

type BoardNavbarProps = {
  visibility: "public" | "private";
  setVisibility: (newVisibility: string) => void;
  members: MemberType[];
};

export default function BoardNavbar({
  visibility,
  setVisibility,
  members,
}: BoardNavbarProps) {
  return (
    <div className="flex h-8 flex-wrap items-stretch gap-4">
      <div className="w-24">
        <IconButton
          icon={visibility === "public" ? LuGlobe2 : LuLock}
          active={visibility === "private"}
        >
          {visibility === "public" ? "Public" : "Private"}
        </IconButton>
      </div>
    </div>
  );
}

function MemberIcon({avatar_url, full_name, username}: MemberType) {
  
}