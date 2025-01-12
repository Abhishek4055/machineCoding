import { createSlice } from "@reduxjs/toolkit";

const somethingSlice = createSlice({
  name: "Something",
  initialState: {
    item: [],
  },
  reducers: {
    // define the action
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    deleteiItem: (state) => {
      state.item.pop();
    },
    clearItem: (state, action) => {
      state.item.length = 0;
    },
  },
});

export const { addItem, deleteiItem, clearItem } = somethingSlice.actions;
export default somethingSlice.reducer;
