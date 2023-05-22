import { createAction, createSlice } from "@reduxjs/toolkit";

import { getSearchVacancies, getVacancies } from "../async/get-vacancies";

export const changeFavorites = createAction("changeFavorites");
export const changeSearchFavorites = createAction("changeSearchFavorites");

export const vacanciesReducer = createSlice({
  name: "vacancies",
  initialState: {
    vacancies: [],
    vacanciesSearch: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVacancies.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.vacancies = action.payload.objects?.map((el) => ({
        ...el,
        isFavorites: false,
      }));
    });
    builder.addCase(getVacancies.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getSearchVacancies.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getSearchVacancies.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.vacanciesSearch = action.payload.objects?.map((el) => ({
        ...el,
        isFavorites: false,
      }));
    });
    builder.addCase(getSearchVacancies.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.finish = true;
    });
     builder.addCase(changeFavorites, (state, { payload }) => {
       state.vacancies?.map((vacancie) =>
         vacancie.id === Number(payload)
           ? (vacancie.isFavorites = !vacancie.isFavorites)
           : vacancie
       );
     });
    builder.addCase(changeSearchFavorites, (state, { payload }) => {
      state.vacanciesSearch?.map((vacancie) =>
        vacancie.id === Number(payload)
          ? (vacancie.isFavorites = !vacancie.isFavorites)
          : vacancie
      );
    });
  },
});
