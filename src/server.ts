//import { Mongoose } from 'mongoose'; ????? NAO SEI PQ SAIU
/*Para rodar no TypeScript : ts-node-dev ./src/server*/ 

import express, { Request, Response } from "express"; //imporatr e Request e Response do express.
//atribuindo/import para a constante td o q tem dentro do módulo express
// as {} é para desestruturar ele

import { router } from "./config/routes";  //quando for exportar alguma coisa nossa sempre fazer o caminho completo e não apenas o nome dele

//./para frente ../ para trás

import{ mongoose } from "./config/database";

const app = express( ); //onde vai estar a nossa aplicação, express passa para o app todo o servidor funcionando. (app, se comportará como uma Aplicação/Servidor).

const db = mongoose; //jogando para essa constante apenas para rodar 

console.clear( );

app.use(express.json( )); //para dizer q vai usar de dentro do express o json
app.use(router); // dizer para a aplicação ultilizar o router 

app.listen(3000, () => {   
    console.log("O servidor está rodando...");
});//fica escutando se receber um comando ele executa, tb é uma função.
// => função flexa

