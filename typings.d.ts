type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};
type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  langauge: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};
type Pagination = {
  count: Int;
  limint: Int;
  offset: Int;
  total: Int;
};

type Query = {
  myQuery(
    access_key: String,
    countries: String,
    categories: String,
    limit: String,
    offset: String,
    sort: String,
    keywords: String
  );
};
type Root = {
  data: [Article];
  pagination: Pagination;
};
