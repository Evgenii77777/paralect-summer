import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { Container } from "./components/container";
import { FavoritesPage } from "./pages/favorites";
import { LayoutPage } from "./pages/layout/layout-page";
import { VacanciPage } from "./pages/vacanci";
import { store } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Container>
          <Routes>
            <Route path="/" element={<LayoutPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/vacancies/:id" element={<VacanciPage />} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
