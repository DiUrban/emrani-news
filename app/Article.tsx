import Image from "next/image";
import React from "react";
import LiveTimestamp from "../LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = { article: Article };

function Article({ article }: Props) {
  return (
    <article className="bg-primary-400 dark:bg-primary-900 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-primary-200 transition-all duration-200 ease-out hover:dark:bg-primary-800">
      {article.image && (
        <Image
          width={3000}
          height={3000}
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="text-primary-1000 dark:text-primary-200 font-bold font-serif">
            {article.title}
          </h2>
          <section className="mt-2 flex-1">
            <p className="text-primary-1000 dark:text-primary-200 text-xs line-clamp-2">
              {article.description}
            </p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-primary-700">
            <p className="text-primary-1000 dark:text-primary-200">
              {article.source}
              {" - "}
            </p>
            <p className="text-primary-1000 dark:text-primary-200">
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
