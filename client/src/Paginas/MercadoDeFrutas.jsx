import { useState, useEffect } from "react";
import Axios from "axios";
import CardFrutas from "../Componentes/CardFrutas";

export default function MercadoDeFrutas() {
  const CHAVE_LISTA_FRUTAS = "listaFrutas";
  const [listaDeFrutas, setlistaDeFrutas] = useState([]);

  

  return (
    <div className="container text-center">
      <h1>Mercado de Frutas</h1>
      <hr />
      <div className="row row-cols-5">
        123
      </div>
    </div>
  );
}
