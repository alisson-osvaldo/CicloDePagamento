import { Router, Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";  //quando for importar sem a desestruturação pode colocar qualquer nome ex:CicloSchema

class CicloController{
    
    listar(request: Request, response: Response){
        const jogo = {
            titulo : "CS",
            plataforma : "PC",
            Valor: 50.99,
            Genero : "FPS"
        };
        response.json(jogo);
    } //listando o ciclo

    hellow(request : Request , response : Response){
        response.send('Hellow Word! ');
    }

    buscarPorId(request: Request, response: Response){
        console.log(request.params); //parametros solicitados pelo usuario, que traram a essa resposta ->
        //.params o que retorna  do...
        const { param1, param2 } = request.params; //desestruturando desse jeito, ele vai pegar apenas o pedaço do objeto, e não precisa fazer  uma const para cada 1, : (const param1 = request.params.param1;)
      
        const jogo = {
            titulo : "CS GO",
            plataforma : "PC",
            Valor: 50.99,
            Genero : "FPS",
            param1,
            param2
        };
        response.json(jogo);
    }

    cadastrar(request: Request, response: Response){
        const objeto = request.body;
        CicloSchema.create(objeto); //vai guardar o nosso objeto(CicloSchema) no banco
         response.json(objeto); //enviando uma requisição via json
    }
}

export { CicloController }; //exportando CilcloController 

