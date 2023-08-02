import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconType } from "react-icons";

type IconButtonProps = {
  children: React.ReactNode;
  icon: IconType;
  active: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function IconButton({
  children,
  icon: Icon,
  active,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={`flex grow items-center gap-3 rounded-lg border border-transparent px-4 py-2 text-left text-xs font-medium outline-none hover:border-gray-500 focus-visible:ring-4 focus-visible:ring-gray-300 ${
        active ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"
      }`}
    >
      <Icon height={12} width={12} />
      {children}
    </button>
  );
}
