import { Artigo } from "@/types/types";
import newsApi from "./axios";

async function getNews() : Promise<Artigo[]> {
  const response = await newsApi.get(process.env.NEWS_API_URL!, {
    params: {
      country: "us",
      category: "general",
      q: "travel",
      pageSize: 6,
      apiKey: process.env.NEWS_API_KEY,
    },
  });

  return response.data.articles;
}

export default getNews;