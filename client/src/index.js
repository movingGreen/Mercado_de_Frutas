import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLinks from "./Paginas/NavLinks";
import Carrinho from "./Paginas/Carrinho";
import Erro from "./Paginas/Erro";
import Inicio from "./Paginas/Inicio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<NavLinks />}>
        <Route
          index
          element={<Inicio />}
        />
        <Route
          path="Carrinho"
          element={<Carrinho />}
        />
        <Route
          path="*"
          element={<Erro />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
