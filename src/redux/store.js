import { configureStore } from "@reduxjs/toolkit";
import { somethingReducer } from "./somethingSclice";

const centeralizedStore = configureStore({
  reducer: {
    cart: somethingReducer, // thsi is a reducer
  },
});
