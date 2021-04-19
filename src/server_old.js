/*Para rodar = node ./src/server*/

const express = require("express"); //atribuindo para a constante td o q tem dentro do módulo express
const app = express( ); //onde vai estar a nossa aplicação, express passa para o app todo o servidor funcionando. (app, se comportará como uma Aplicação/Servidor).

app.get(/*cominho, quando for ali fassa isso*/"/", (request, response) => {
    response.send('Hellow Word! ');
});
//uma funcionalidade para o get (requisição feita pelo usuário, get, post, head...)
//request : solicitação  response: resposta ex(Hellow Word!)

app.listen(3000, () => {   
    console.log("O servidor está rodando...");
});//fica escutando se receber um comando ele executa, tb é uma função.
// => função flexa


/*
const funcao = function( ){
    console.log("Teste");
};   //uma constante chamada função recebendo uma função;

function Teste( ){
    return "123";
};   //função chamada Teste

const teste = Teste( ); //constante recebe a função Teste();

console.log(teste); //imprimindo finção teste
funcao( ); //imprimindo constante funcao
*/