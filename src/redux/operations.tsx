import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "./articleSlice";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/";

const fetchArticle = createAsyncThunk<
  Article[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async (_, thunkAPI) => {
  try {
    const response = await axios.get("v3/articles?_limit=100");
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default fetchArticle;
