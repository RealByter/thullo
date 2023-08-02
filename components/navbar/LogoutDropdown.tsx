"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { MdArrowDropDown, MdAccountCircle, MdLogout } from "react-icons/md";

export default function LogoutDropdown({
  avatar_url,
  full_name,
  username,
}: {
  avatar_url: string;
  full_name?: string;
  username?:string;
}) {
  const router = useRouter();

  async function signOut() {
    const res = await fetch(`${location.origin}/auth/signout`, {
      method: "POST",
    });

    router.refresh();
  }

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center gap-4 overflow-hidden rounded-lg outline-none hover:bg-gray-100 focus-visible:ring-4 focus-visible:ring-gray-300">
          <Image
            src={avatar_url}
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="hidden text-xs font-bold text-gray-800 lg:inline">
            {full_name || username}
          </span>
          <MdArrowDropDown className="h-6 w-6" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 top-12 flex w-40 flex-col gap-2 rounded-xl border bg-white p-2 shadow-main outline-none">
          <Menu.Item>
            <button className="flex h-10 items-center gap-4 rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-100 ui-active:bg-gray-100">
              <MdAccountCircle className="h-6 w-6" /> My Profile
            </button>
          </Menu.Item>
          <div className="w-full border-t" />
          <Menu.Item>
            <button
              onClick={signOut}
              className="flex h-10 items-center gap-4 rounded-lg p-2 text-sm text-red-500 hover:bg-red-100 ui-active:bg-red-100"
            >
              <MdLogout className="h-6 w-6" /> Logout
            </button>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

const MenuButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { red?: boolean | undefined },
) => {
  const colorClasses = props.red
    ? "text-red-500 hover:bg-red-100 ui-active:bg-red-100"
    : "text-gray-600 hover:bg-gray-100 ui-active:bg-gray-100";

  return (
    <button
      {...props}
      className={`flex h-10 items-center gap-4 rounded-lg p-2 text-sm ${colorClasses}`}
    ></button>
  );
};
