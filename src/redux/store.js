import { configureStore } from "@reduxjs/toolkit";
import valueTableReducer from "./valueTableSlice";

export const store = configureStore({
  reducer: {
    valueTable: valueTableReducer,
  },
});
