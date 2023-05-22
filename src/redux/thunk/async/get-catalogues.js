import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseURL, client_secret } from "../../api";

const config = {
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
    "X-Api-App-Id": client_secret,
  },
};

export const getCatalogues = createAsyncThunk(
  "catalogues/getCatalogues",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BaseURL}/2.0/catalogues/`, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
