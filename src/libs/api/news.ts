import { Artigo } from "@/types/types";

export async function getNews(): Promise<Artigo[]> {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.NEWS_API_KEY}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error("Erro na API");
  }

  const data: { articles: Artigo[] } = await response.json();

  return data.articles;
}
