export type ArticleSchema = {
  id: number;
  featured: false;
  title: "string";
  url: "string";
  imageUrl: "string";
  newsSite: "string";
  summary: "string";
  publishedAt: "string";
  launches: [
    {
      id: "string";
      provider: "string";
    }
  ];
  events: [
    {
      id: "string";
      provider: "string";
    }
  ];
};

export type Article = {
  articles: ArticleSchema[] | [];
  filteredArticles: ArticleSchema[] | [];
  filtered: boolean;
  articleById: ArticleSchema | {};
  location: Location | null;
  isLoading: boolean;
  error: string | null;
};
