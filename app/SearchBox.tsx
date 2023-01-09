"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {};

function SearchBox({}: Props) {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) {
      return;
    } else {
      router.push(`/search?term=${input}`);
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-14 rounded-sm placeholder-primary-400 text-primary-400 bg-transparent dark:text-primary-100 flex-1 dark:placeholder-primary-100"
        placeholder="Search Keywords..."
      />
      <button
        type="submit"
        disabled={!input}
        className="text-primary-400 disabled:text-gray-400 dark:disabled:text-gray-200 dark:text-primary-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
