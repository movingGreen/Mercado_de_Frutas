import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLinks from "./Componentes/NavLinks";
import Carrinho from "./Paginas/Carrinho";
import Erro from "./Paginas/Erro";
import Inicio from "./Paginas/Inicio";

export default function App() {
  return (
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
}
