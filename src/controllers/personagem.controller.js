const pesrsonagensService = require('../services/personagem.service')

const findAllCharactersController = (req,res) => {
const personagens = pesrsonagensService.findAllCharactersService();
res.send(personagens);
};
const findByIdCharacterController = (req,res) => {
    const idParam = Number(req.params.id);
  const chosenCharacter = pesrsonagensService.findByIdCharacterService(idParam)
  res.send(chosenCharacter);
}
const createCharacterController = (req,res) =>{
const personagem = req.body;
const newPersonagem = pesrsonagensService.createCharacterService(personagem);
res.send(newPersonagem);
};
const updateCharacterController = (req,res) =>{
  const idParam = Number(req.params.id);
  const personagemEdit = req.body;
  const updatedPersonagem = paletasService.updateCharacterService(idParam, personagemEdit);
  res.send(updatedPersonagem);
};
const deleteCharacterController = (req,res) =>{
  const idParam = req.params.id;
  pesrsonagensService.deleteCharacterService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};


module.exports = {
findAllCharactersController,
findByIdCharacterController,
createCharacterController,
updateCharacterController,
deleteCharacterController,

};
