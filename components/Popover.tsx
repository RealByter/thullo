import { Popover as UIPopover } from "@headlessui/react";
import { IconType } from "react-icons";

type PopoverProps = {
  buttonText: string;
  children: React.ReactNode;
  icon: IconType;
};

export default function Popover({
  buttonText,
  children,
  icon: Icon,
}: PopoverProps) {
  return (
    <UIPopover className="relative grow">
      {({ open }) => (
        <>
          <UIPopover.Button className={`flex w-full items-center gap-3 rounded-lg border border-transparent bg-gray-100 px-4 py-2 text-xs font-medium text-gray-500 outline-none hover:border-gray-500 focus-visible:ring-4 focus-visible:ring-gray-300 ${open && "ui-open:bg-gray-900 ui-open:text-white"}`}>
            <Icon height={12} width={12} />
            {buttonText}
          </UIPopover.Button>
          <UIPopover.Panel className="absolute top-10 z-10">
            {children}
          </UIPopover.Panel>
        </>
      )}
    </UIPopover>
  );
}
