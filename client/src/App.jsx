import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrinho from "./Paginas/Carrinho";
import InformacaoFruta from "./Paginas/InformacaoFruta";
import MercadoDeFrutas from "./Paginas/MercadoDeFrutas";
import Navegador from "./Componentes/Navegador";
import PaginaErro from "./Paginas/PaginaErro";

export default function App() {
  return (
    <>
      <Navegador />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<MercadoDeFrutas />}
          />
          <Route
            path="/Informacoes"
            element={<InformacaoFruta />}
          />
          <Route
            path="/Carrinho"
            element={<Carrinho />}
          />
        </Routes>
      </div>
    </>
  );
}
