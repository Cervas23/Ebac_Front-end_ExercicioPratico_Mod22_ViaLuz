import { Artigo } from "@/types/types";

type Data = {
  status: string;
  totalResults: number;
  articles: Artigo[];
}

export async function getNews(): Promise<Artigo[]> {

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.NEWS_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  );

  const data: { articles: Artigo[] } = await response.json();

  return data.articles;

}

