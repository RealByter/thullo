"use client";

import Image from "next/image";
import Link from "next/link";

type BoardLinkProps = {
  id: string;
  photo: string;
  name: string;
  usersAvatars: string[];
};

export default function BoardLink({
  photo,
  name,
  usersAvatars,
  id,
}: BoardLinkProps) {
  const others = usersAvatars.length - 3

  return (
    <Link
      href={`/boards/${id}`}
      className="flex h-64 flex-col rounded-xl bg-white p-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]"
    >
      <div className="relative h-36 w-full overflow-hidden rounded-xl">
        <Image src={photo} alt="Board Photo" fill objectFit="cover" />
      </div>
      <h2 className="mt-3 font-medium">{name}</h2>
      <div className="mt-5 flex items-center gap-3">
        {usersAvatars.slice(0, 3).map((avatar) => (
          <div className="overflow-hidden rounded-lg">
            <Image width={28} height={28} src={avatar} alt="" />
          </div>
        ))}
        {others > 0 && (
          <span className="text-xs font-medium text-gray-400">
            + {others} {others > 1 ? "others" : "other"}
          </span>
        )}
      </div>
    </Link>
  );
}
