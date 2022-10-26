import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorization" element={<Auth />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
      <App />
    </Provider>
  </BrowserRouter>
);
