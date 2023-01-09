import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";
type Props = {};

async function page({}: Props) {
  //@ts-ignore
  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default page;
