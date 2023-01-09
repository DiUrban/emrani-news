import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = { params: { category: Category } };

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  const filteredNews = {
    pagination: news.pagination,
    data: news.data.filter((e) => e.category === category),
  };
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={filteredNews} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
