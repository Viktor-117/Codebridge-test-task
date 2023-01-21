import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/";

const fetchArticle = createAsyncThunk(
  "articles/getArticle",
  async (_, thunkAPI): Promise<unknown> => {
    try {
      const response = await axios.get("/v3/articles/count");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default fetchArticle;
