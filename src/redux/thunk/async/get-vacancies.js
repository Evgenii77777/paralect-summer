import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseURL, client_secret } from "../../api";

const config = {
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
    "X-Api-App-Id": client_secret,
  },
};

export const getVacancies = createAsyncThunk(
  "vacancies/getVacancies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BaseURL}/2.0/vacancies/`, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSearchVacancies = createAsyncThunk(
  "vacanciesSearch/getSearchVacancies",
  async (search, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BaseURL}/2.0/vacancies/?keyword=${search.keyword}&payment_from=${search.from}&payment_to=${search.to}&catalogues=${search.catalogues}&published=1`,
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
