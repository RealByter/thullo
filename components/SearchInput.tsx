import { useEffect, useState } from "react";

type SearchInputProps = {
  search: (input: string) => void;
};

export default function SearchInput({ search }: SearchInputProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      search(query);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="rounded-lg bg-white p-3 text-xs font-medium shadow-main outline-none placeholder:text-[#BDBDBD]"
      placeholder="Keywords..."
    />
  );
}
