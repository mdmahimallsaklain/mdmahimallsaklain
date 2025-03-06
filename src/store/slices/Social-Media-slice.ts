"use client";

import { InitialStateTypes } from "@/interfaces/Social-Media.Slice.Interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios"; // Axios for API calls

// Initial state for the slice
const initialState: InitialStateTypes = {
  loading: true,
  error: "",
  data: {
    message: "",
    data: null,
  },
};


const ROOT_API = process.env.NEXT_PUBLIC_ROOT_API;

// Asynchronous thunk action to fetch social media data
export const fetchData = createAsyncThunk(
  "socialMedia/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const api = `${ROOT_API}/social-medias` || "";
      const response = await axios.get(api);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);

// Create a slice for social media data management
const SocialMediaSlice = createSlice({
  name: "socialMedia",
  initialState,
  reducers: {
    // Reducer to set an error state manually
    setError: (state, action) => {
      state.loading = false;
      state.data = initialState.data;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.data.length === 0) {
          state.data.data = null;
          state.error = "No data found!";
        } else {
          state.data = action.payload;
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError } = SocialMediaSlice.actions;
export default SocialMediaSlice.reducer;
