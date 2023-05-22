import { createSlice } from "@reduxjs/toolkit";

import { getAuth } from "../async/get-auth";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    auth: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuth.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.auth = action.payload;
    });
    builder.addCase(getAuth.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});
