const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

//Configurando nossa aplicaçao para trabalhar com json
app.use(express.json());

app.use(cors());

// Definindo dados para usar na aplicacao

const paletas = [
  {
    id: 1,
    sabor: "Açai com Leite Condensado",
    descricao: "Açai com Leite Condensado",
    foto: "https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Saco de macho",
    descricao: "Haha, eh mole?",
    foto: "https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg",
    preco: 10.0,
  },
];

app.get("/", (req, res) => {
  res.send("Salve porra");
});

app.get("/paletas/find-paletas/:id", (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenPaleta);
});

app.listen(port, () => {
  console.log(`A aplicação está rodando em http://localhost:${port}`);
});
