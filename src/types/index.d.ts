export interface AppProps {
  articles: Array<object>;
}

export interface PageProps {
  articles: Array<object>;
}

export type Articles = Article[];

export interface Article {
  source: Source; 
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;  
  content: string;
}

interface Source {
  id: null;
  name: string;
}
