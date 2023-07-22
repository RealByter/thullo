import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  size?: "big" | "square" | "default";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ size, ...props }: ButtonProps) {
  let sizeClasses;
  if (size === "square") {
    sizeClasses = "w-8 h-8";
  } else if (size === "big") {
    sizeClasses = "px-6 py-2";
  } else {
    sizeClasses = "px-3 py-2";
  }

  return (
    <button
      {...props}
      className={`bg flex items-center justify-center border border-blue-500 text-white hover:bg-white hover:text-blue-500 bg-blue-500 rounded-lg text-xs outline-none focus-visible:ring-4 focus-visible:ring-blue-400 ${sizeClasses}`}
    />
  );
}
