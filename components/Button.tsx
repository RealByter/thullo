import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  size?: "big" | "square" | "default";
  variant?: "blue" | "transparent";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  size,
  variant = "blue",
  ...props
}: ButtonProps) {
  let sizeClasses;
  if (size === "square") {
    sizeClasses = "w-8 h-8";
  } else if (size === "big") {
    sizeClasses = "px-6 py-2";
  } else {
    sizeClasses = "px-3 py-2";
  }

  let variantClasses;
  if (variant === "blue") {
    variantClasses =
      "border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:text-white disabled:bg-gray-400 disabled:border-gray-400";
  } else if (variant === "transparent") {
    variantClasses =
      "border-transparent bg-transparent text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-300";
  }

  return (
    <button
      {...props}
      className={`bg flex items-center justify-center rounded-lg border text-xs outline-none focus-visible:ring-4  ${sizeClasses} ${variantClasses}`}
    />
  );
}
