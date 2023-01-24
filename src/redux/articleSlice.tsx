import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import {
  fetchArticle,
  fetchFilteredArticle,
  fetchArticleById,
} from "./operations";
import { Article } from "types/types";

const initialState: Article = {
  articles: [],
  filteredArticles: [],
  filtered: false,
  articleById: {},
  location: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: Article) => {
  state.isLoading = true;
  state.error = null;
};

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
      .addCase(fetchArticle.pending, handlePending)
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFilteredArticle.pending, handlePending)
      .addCase(fetchFilteredArticle.fulfilled, (state, action) => {
        state.filteredArticles = action.payload;
        state.isLoading = false;
        state.filtered = true;
        state.error = null;
      })
      .addCase(fetchArticleById.pending, handlePending)
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
