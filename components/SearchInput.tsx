import { useEffect, useState } from "react";
import Input from "./Input";

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
    <Input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Keywords..."
    />
  );
}
