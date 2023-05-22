import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  BaseURL,
  client_id,
  client_secret,
  login,
  password,
  hr,
} from "../../api";

const config = {
  params: {
    login,
    password,
    client_id,
    hr,
    client_secret,
  },
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
    "X-Api-App-Id": client_secret,
  },
};

export const getAuth = createAsyncThunk(
  "auth/getAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BaseURL}/2.0/oauth2/password`,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
