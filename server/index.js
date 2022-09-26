const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/listaDeFrutas", (req, res) => {
  let dados = "";

  const apiListaFrutas = https.get(
    "https://www.fruityvice.com/api/fruit/all",
    (resposta) => {
      resposta.setEncoding("utf-8");

      resposta.on("data", (parte) => {
        dados += parte;
      });
      resposta.on("end", () => {
        res.send(dados);
      });
    }
  );
});

app.listen(3001, () => {
  console.log("servidor rodando na porta 3001");
});
