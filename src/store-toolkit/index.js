import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
  },
});
