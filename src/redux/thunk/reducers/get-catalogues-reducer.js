import { createSlice } from "@reduxjs/toolkit";

import { getCatalogues } from "../async/get-catalogues";

export const cataloguesReducer = createSlice({
  name: "catalogues",
  initialState: {
    catalogues: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatalogues.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCatalogues.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.catalogues = action.payload;
    });
    builder.addCase(getCatalogues.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});
