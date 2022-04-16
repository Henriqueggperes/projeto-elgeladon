const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();

//Configurando nossa aplicaçao para trabalhar com json
app.use(express.json());

app.use(cors());

// Definindo dados para usar na aplicacao

const characters = [
  {
    id: 1,
    personagem: "Jotaro Kujo",
    stand: "Star Platinum",
    standstatus: "BB",
    habilidades: "Parara o tempo",
    foto: "https://mugenarchive.com/forums/576546d5bf292b9424d94fde84f7b5a3/images/jotaro_47522_thumb.gif",
  },
  {
    id: 2,
    personagem: "Dio",
    stand: "The World",
    standstatus: "CC",
    habilidades: "Parar o tempo (WRYYY)",
    foto: "https://image.myanimelist.net/ui/HlQ6Ym2sGbLFJFCFIz0ba-MuuU8Ua6BvgxzQMx8j6l2CuPleFNp8y-YhmDGoXkzU-uYo0Sc7wv5IKkwcVce7oLUhmUcifn8wfJZlPUwTf_IjffB0JfIPJKNl-IqIUnZWg8WyYxioYgbadySMT3keEXOCVG2ALsTueKfmkx7vh3E",
  },
];

app.get("/personagens", (req, res) => {

});

app.get("/personagem/find-personagem/:id", (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = peso.find((character) => character.id == idParam);
  res.send(chosenCharacter);
});

app.listen(port, () => {
  console.log(`A aplicação está rodando em http://localhost:${port}`);
});
