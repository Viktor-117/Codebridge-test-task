import {
  // ActionReducerMapBuilder,
  createSlice,
  // PayloadAction,
} from "@reduxjs/toolkit";
import fetchArticles from "./operations";

export type Article = {
  isLoading: boolean;
  articles: {};
  error: {}[];
};

type ArticleState = {
  articles: {}[];
  isLoading: boolean;
  error: string | null;
};

const initialState: ArticleState = {
  articles: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
      });
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
