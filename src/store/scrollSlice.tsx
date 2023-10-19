import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

const scrollSlice = createSlice({
  initialState: {},
  name: "scroll",
  reducers: {},
});

export const ScrollReducer = scrollSlice.reducer;
