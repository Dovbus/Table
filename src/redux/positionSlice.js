import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  position: 0,
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    setPosition: (state, action) => {
      state.position = action;
    },
  },
});

export const { setPosition } = positionSlice.actions;
export const usePosition = () =>
  useSelector((state) => state.position.position.payload);

export default positionSlice.reducer;
