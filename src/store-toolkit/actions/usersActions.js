import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsersToolkit = createAsyncThunk(
  "users/fetch",
  async (_, thunkAPI) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const res = await axios.get(url);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
