import { Artigo } from "@/types/types";
import newsApi from "./axios";

type Data = {
  status: string;
  totalResults: number;
  articles: Artigo[];
}

export async function getNews() {
  try {
    const response = await newsApi.get<Data>(`${process.env.NEWS_API_URL}`, {
      params: {
        country: "us",
        category: "general",
        apiKey: process.env.NEWS_API_KEY,
        
      },
    });
    console.log(response.data.articles);
    
    return response.data.articles;
  }
  catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
}

