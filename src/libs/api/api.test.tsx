import { getNews } from "./news";

describe("getNews", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve chamar fetch com a URL correta", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        articles: [],
      }),
    }) as jest.Mock;

    await getNews();

    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://newsapi.org/v2/top-headlines"),
      expect.any(Object),
    );
  });

  test("deve retornar os dados da API", async () => {
    const mockData = {
      articles: [{ title: "Notícia 1" }, { title: "Notícia 2" }],
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    }) as jest.Mock;

    const result = await getNews();

    expect(result).toEqual(mockData.articles);
  });

  test("deve lançar erro quando a API falhar", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    }) as jest.Mock;

    await expect(getNews()).rejects.toThrow();
  });
});
