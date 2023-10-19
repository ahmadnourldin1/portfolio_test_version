import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ScrollReducer } from "./scrollSlice";

export const store = configureStore({
  reducer: { ScrollReducer },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
