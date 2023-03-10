"use client";

import { useRouter } from "next/navigation";

type Props = { article: Article };

function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-primary-500 dark:bg-primary-300 h-10 rounded-b-lg dark:text-primary-200 hover:bg-primary-400"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
