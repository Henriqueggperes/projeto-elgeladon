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
    personagem: "Jotaro Kujo",
    stand: "Star Platinum",
    standstatus: "",
    habilidades: "Parara o tempo",
    foto: "https://www.spriters-resource.com/resources/sheet_icons/78/81349.png",
  },
  {
    id: 1,
    personagem: "Dio",
    stand: "The World",
    standstatus: "",
    habilidades: "Parar o tempo (WRYYY)",
    foto: "https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg",
  },
];

app.get("/", (req, res) => {

});

app.get("/personagem/find-personagem/:id", (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = paletas.find((paleta) => paleta.id == idParam);
  res.send(chosenCharacter);
});

app.listen(port, () => {
  console.log(`A aplicação está rodando em http://localhost:${port}`);
});
