"use client";

import {
  InitialDataTypes,
  InitialStateTypes,
} from "@/interfaces/Services.Slice.Interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Initial state setup
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

// Asynchronous thunk for fetching service data
export const fetchData = createAsyncThunk<
  InitialDataTypes,
  { page?: number; limit?: number; search?: string | null },
  { rejectValue: string }
>(
  "services/fetchData",
  async ({ page = 1, limit = 6, search = null }, { rejectWithValue }) => {
    try {
      const api = `${ROOT_API}/services?page=${page}&limit=${limit}${
        search ? `&search=${search}` : ""
      }`;
      const response = await axios.get(api);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.message || "Failed to fetch data");
    }
  }
);

// Create slice for managing service state
const ServiceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    // Reducer to manually set error
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
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<InitialDataTypes>) => {
          state.loading = false;
          if (!action.payload.data || action.payload.data.length === 0) {
            state.data.data = null;
            state.error = "No data found!";
            return;
          }
          state.data = action.payload;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });
  },
});

export const { setError } = ServiceSlice.actions;
export default ServiceSlice.reducer;
