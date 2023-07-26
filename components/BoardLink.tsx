"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const others = usersAvatars.length - 3;

  return (
    <Link
      href={`/boards/${id}`}
      className="flex h-60 flex-col rounded-xl bg-white p-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]"
    >
      <div className="relative h-36 w-full overflow-hidden rounded-xl">
        <Image src={photo} alt="Board Photo" fill objectFit="cover" />
      </div>
      <h2 className="mt-2 font-medium">{name}</h2>
      <div className="mt-2 flex items-center gap-3">
        {usersAvatars.slice(0, 3).map((avatar, index) => (
          <div className="overflow-hidden rounded-lg" key={index}>
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

export function SkeletonBoardLink() {
  return (
    <div className="flex h-60 flex-col rounded-xl bg-white p-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
      <div className="relative h-36 w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full" />
      </div>
      <h2 className="mt-2 font-medium">
        <Skeleton />
      </h2>
      <div className="mt-2 flex items-center gap-3">
        <div className="overflow-hidden rounded-lg">
          <Skeleton height={28} width={28} />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Skeleton height={28} width={28} />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Skeleton height={28} width={28} />
        </div>
      </div>
    </div>
  );
}
