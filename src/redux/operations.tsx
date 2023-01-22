import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleSchema } from "./articleSlice";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/";

const fetchArticle = createAsyncThunk<
  ArticleSchema[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async (_, thunkAPI) => {
  const response = await axios.get("v3/articles?_limit=100");
  console.log(response.data);
  if (!response.data) {
    return thunkAPI.rejectWithValue("Ooops! Something went wrong");
  }
  return response.data as ArticleSchema[];
});

export default fetchArticle;
