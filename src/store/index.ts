"use client";

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ProjectsReducer from "./slices/Projects-Slice";
import ServicesReducer from "./slices/Services-Slice";
import SocialMediasReducer from "./slices/Social-Media-slice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    projects: ProjectsReducer,
    services: ServicesReducer,
    socialMedia: SocialMediasReducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for typed dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
