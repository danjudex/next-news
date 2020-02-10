export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsItem[];
}
export interface NewsItem {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}
