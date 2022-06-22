import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import db from "../db.json";

const initialState = {
  mainTableValues: db,
};

const mainTableValuesSlice = createSlice({
  name: "mainTableValues",
  initialState,
  reducers: {
    editValue: (state, action) => {
      state.mainTableValues[action.payload.region]["G"][action.payload.year][
        action.payload.coords
      ].value = action.payload.value;
    },
  },
});

export const { editValue } = mainTableValuesSlice.actions;

export const useMainTableValues = () =>
  useSelector((state) => state.mainTableValues.mainTableValues);

export default mainTableValuesSlice.reducer;
