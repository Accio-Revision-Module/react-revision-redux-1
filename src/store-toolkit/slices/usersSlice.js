import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersToolkit } from "../actions/usersActions";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersToolkit.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersToolkit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsersToolkit.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
