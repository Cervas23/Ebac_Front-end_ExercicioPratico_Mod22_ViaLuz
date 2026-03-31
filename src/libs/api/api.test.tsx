import { getNews } from './news';

describe('getNews', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEWS_API_KEY = 'test_key';
  });

  test('deve chamar fetch com a URL correta', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        articles: [],
      }),
    }) as jest.Mock;

    await getNews();

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://newsapi.org/v2/top-headlines'),
      expect.any(Object),
    );
  });

  test('deve retornar os dados da API', async () => {
    const mockData = {
      articles: [{ title: 'Notícia 1' }, { title: 'Notícia 2' }],
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    }) as jest.Mock;

    const result = await getNews();

    expect(result).toEqual(mockData.articles);
  });

  test('deve retornar array vazio quando a API falhar', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    ) as jest.Mock;

    const result = await getNews();

    expect(result).toEqual([]);
  });

  test('deve retornar vazio sem API key', async () => {
    delete process.env.NEWS_API_KEY;

    const result = await getNews();

    expect(result).toEqual([]);
  });
});
