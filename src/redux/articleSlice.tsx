import {
  // ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import {
  fetchArticle,
  fetchFilteredArticle,
  fetchArticleById,
} from "./operations";

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

const initialState: Article = {
  articles: [],
  filteredArticles: [],
  filtered: false,
  articleById: {},
  location: null,
  isLoading: false,
  error: null,
};

// const handleFulfilled = (state: Article, action: PayloadAction<string>) => {
//   state.isLoading = false;
//   state.articles = action.payload;
// };

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<Location>) {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFilteredArticle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredArticle.fulfilled, (state, action) => {
        state.filteredArticles = action.payload;
        state.isLoading = false;
        state.filtered = true;
        state.error = null;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.articleById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

const articlesReducer = articleSlice.reducer;

export const { setLocation } = articleSlice.actions;

export default articlesReducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
