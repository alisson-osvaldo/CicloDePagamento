//Arquivo de configuração da base de dados

import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://topicos:topicos@cluster0.uyn39.mongodb.net/SegundaNoite?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectado ao banco de dados!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar com o banco: ${error}`);
  });
//then( ) Se der boa vai executar 
//catch( ) Se der ruim vai executar

export { mongoose };



