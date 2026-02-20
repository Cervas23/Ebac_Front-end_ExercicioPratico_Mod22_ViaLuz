
export interface Destino {
    id : number;
    local : string;
    descricao : string; 
    imagem :  string;
}

export interface Artigo {
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}