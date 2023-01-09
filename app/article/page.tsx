"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LiveTimestamp from "../../LiveTimestamp";

type Props = { searchParams?: Article };

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  const article: Article = searchParams;
  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10 text-primary-1000 dark:text-primary-200">
        <Link href={article.url}>
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="max-w-md mx-auto md:max-md-lg lg:max-w-xl object-cover rounded-t-lg shadow-md"
            />
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
