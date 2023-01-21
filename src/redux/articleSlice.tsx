import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchArticle from "./operations";

type Article = {
  isLoading: boolean;
  articles: {};
  error: {}[];
};

type ArtileState = { list: Article[] };

const initialState: ArtileState = { list: [] };

const handleFulfilled = (state: Article, action: PayloadAction<{}>) => {
  state.isLoading = false;
  state.articles = action.payload;
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.fulfilled, handleFulfilled);
  },
  //   extraReducers: {
  //     [fetchArticle.fulfilled](state, action) => {
  //       state.isLoading = false;
  //       state.articles = action.payload;
  //     },
  //     [fetchArticle.pending]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [fetchArticle.rejected]: (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
});

const articlesReducer = articleSlice.reducer;

export default articlesReducer;
