import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = {
  className?: string | undefined;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`${className} rounded-lg border border-stone-400 bg-stone-100 p-3 text-xs font-medium outline-none transition duration-100 placeholder:text-[#BDBDBD] focus:border-transparent focus:bg-white focus:shadow-[0_4px_12px_#0000001a] `}
    />
  );
}
