"use client";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import LiveTimestamp from "../../LiveTimestamp";

type Props = {};

function ArticlePage({}: Props) {
  const searchParams = useSearchParams();
  if (
    !searchParams ||
    searchParams.get("title") === "null" ||
    searchParams.get("url") === "null"
  ) {
    return notFound();
  }
  const article: Article = {
    category: searchParams.get("category"),
    country: searchParams.get("country"),
    //@ts-ignore
    url: searchParams.get("url"),
    //@ts-ignore
    image: searchParams.get("image"),
    //@ts-ignore
    title: searchParams.get("title"),
    author: searchParams.get("author"),
    source: searchParams.get("source"),
    //@ts-ignore
    published_at: searchParams.get("published_at"),
    description: searchParams.get("description"),
  };
  console.log(article);

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10 text-primary-1000 dark:text-primary-200">
        <Link href={article.url} prefetch={false}>
          {article.image != "null" ? (
            <img
              src={article.image}
              alt={article.title}
              className="max-w-md mx-auto md:max-md-lg lg:max-w-xl object-cover rounded-t-lg shadow-md"
            />
          ) : (
            <div className="block h-48 w-96 items-center justify-center">
              <h1 className="flex items-center justify-center">
                Image Missing..
              </h1>
            </div>
          )}
          <button className="max-w-6xl w-full bg-primary-1000 dark:bg-primary-200 rounded-b-lg mx-auto my-0 text-primary-200 dark:text-primary-1000 cursor-pointer">
            Read Full Article
          </button>
        </Link>
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2 ">
            {article.title}
          </h1>
          <div className="">
            <h2 className="font-bold">
              By: {article.author === "null" ? "Unknown" : article.author}
            </h2>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold pl-4">{article.source}</h2>
              <p className="text-xs">
                <LiveTimestamp time={article.published_at} />
              </p>
            </div>
            <p className="pt-4">{article.description}</p>
          </div>
        </div>
      </section>
      <div className="w-full h-18"></div>
    </article>
  );
}

export default ArticlePage;
