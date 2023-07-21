"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { MdArrowDropDown, MdAccountCircle, MdLogout } from "react-icons/md";

export default function LogoutDropdown({
  avatar_url,
  full_name,
}: {
  avatar_url: string;
  full_name: string;
}) {
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
            {full_name}
          </span>
          <MdArrowDropDown className="h-6 w-6" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 top-12 flex w-40 flex-col gap-2 rounded-xl border bg-white p-2 shadow-[0_2px_4px_#0000000d] outline-none">
          <Menu.Item>
            <MenuButton><MdAccountCircle className="w-6 h-6" /> My Profile</MenuButton>
          </Menu.Item>
          <div className="w-full border-t" />
          <Menu.Item>
            <MenuButton red><MdLogout className="w-6 h-6" /> Logout</MenuButton>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

function MenuButton(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { red?: boolean },
) {
  const colorClasses = props.red
    ? "text-red-500 hover:bg-red-100 ui-active:bg-red-100"
    : "text-gray-600 hover:bg-gray-100 ui-active:bg-gray-100";

  return (
    <button {...props} className={`h-10 rounded-lg flex items-center gap-4 p-2 text-sm ${colorClasses}`}></button>
  );
}
