import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./thunk/reducers/get-auth-reducer";
import { vacanciesReducer } from "./thunk/reducers/get-vacancies-reducer";
import { cataloguesReducer } from "./thunk/reducers/get-catalogues-reducer";

const rootReducer = combineReducers({
  auth: authReducer.reducer,
  catalogues: cataloguesReducer.reducer,
  vacancies: vacanciesReducer.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
