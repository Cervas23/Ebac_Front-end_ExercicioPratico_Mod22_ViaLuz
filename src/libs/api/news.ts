import { Artigo } from '@/types/types';

export async function getNews(): Promise<Artigo[]> {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      console.warn('NEWS_API_KEY não definida');
      return [];
    }

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      console.error('Erro na API:', response.status);
      return [];
    }

    const data: { articles?: Artigo[] } = await response.json();

    return data.articles ?? [];
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);

    return [];
  }
}
