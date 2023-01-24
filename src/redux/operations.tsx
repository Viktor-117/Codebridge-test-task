import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleSchema } from "types/types";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/";

export const fetchArticle = createAsyncThunk<
  ArticleSchema[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async (_, thunkAPI) => {
  const response = await axios.get("v3/articles?_limit=9");
  if (!response.data) {
    return thunkAPI.rejectWithValue("Ooops! Something went wrong");
  }
  return response.data as ArticleSchema[];
});

export const fetchFilteredArticle = createAsyncThunk<
  ArticleSchema[],
  string,
  { rejectValue: string }
>("articles/fetchFilteredArticle", async (filter, { rejectWithValue }) => {
  const response = await axios.get(
    `v3/articles?_limit=9&title_contains=${filter}&summary_contains=${filter}`
  );
  if (!response.data) {
    return rejectWithValue("Ooops! Something went wrong");
  }
  return response.data;
});

export const fetchArticleById = createAsyncThunk<
  ArticleSchema,
  number,
  { rejectValue: string }
>("articles/fetchArticleById", async (id, { rejectWithValue }) => {
  const response = await axios.get(`v3/articles/${id}`);
  if (!response.data) {
    return rejectWithValue("Ooops! Something went wrong");
  }
  return response.data as ArticleSchema;
});
