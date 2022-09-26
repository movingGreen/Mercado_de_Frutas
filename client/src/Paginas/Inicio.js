import { useState, useEffect } from "react";
import Axios from "axios";
import CardFruta from "../Componentes/CardFruta";

export default function Inicio() {
  const [listaDeFrutas, setlistaDeFrutas] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/listaDeFrutas").then((response) => {
      setlistaDeFrutas(response.data);
      console.log(listaDeFrutas);
    });
  });

  return (
    <div className="container text-center">
      <h1>Mercado de Frutas</h1>
      <hr />
      <div className="row row-cols-5">
        {listaDeFrutas.map((fruta) => {
          return (
            <CardFruta
              key={fruta.id}
              fruta={fruta}
            />
          );
        })}
      </div>
    </div>
  );
}
