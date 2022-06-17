import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { tables } from "../tables";
import { formatDate } from "../helpers";

const initialState = {
  valueTable: tables,
};

const valueTableSlice = createSlice({
  name: "valueTables",
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.valueTable[action.payload.position].push({
        id: action.payload.position,
        value: action.payload.value,
        date: formatDate(Date.now()),
        user: action.payload.user,
        comment: action.payload.comment,
      });
    },
  },
});

export const { addValue } = valueTableSlice.actions;

export const useValueTable = () =>
  useSelector((state) => state.valueTable.valueTable);

export default valueTableSlice.reducer;
