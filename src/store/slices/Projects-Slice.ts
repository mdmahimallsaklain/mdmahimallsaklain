"use client";

import {
  InitialDataTypes,
  InitialStateTypes,
} from "@/interfaces/Projects.Slice.Interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Initial state
const initialState: InitialStateTypes = {
  loading: true,
  error: "",
  data: {
    message: "",
    data: null,
    pagination: {
      currentPage: 0,
      limit: 0,
      totalDocuments: 0,
      totalPages: 0,
    },
  },
};

const ROOT_API = process.env.NEXT_PUBLIC_ROOT_API;

// Async thunk for fetching projects
export const fetchData = createAsyncThunk<
  InitialDataTypes,
  { page?: number; limit?: number; search?: string | null },
  { rejectValue: string }
>(
  "projects/fetchData",
  async ({ page = 1, limit = 6, search = null }, { rejectWithValue }) => {
    try {
      const api = `${ROOT_API}/projects?page=${page}&limit=${limit}${
        search ? `&search=${search}` : ""
      }`;
      const response = await axios.get(api);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);

// Project slice
const ProjectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
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
        state.data = action.payload;
        console.log(action.payload)
        if (!action.payload.data || action.payload.data.length === 0) {
          state.error = "No data found!";
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch data.";
      });
  },
});

export const { setError } = ProjectSlice.actions;
export default ProjectSlice.reducer;
