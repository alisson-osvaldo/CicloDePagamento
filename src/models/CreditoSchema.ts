import { Schema } from "mongoose";


//instanciando um novo Schema
const creditoShema = new Schema({
        //pega o atributo e transforma ele em um objeto, mas só se for  apenas para definir o tipo coloca direto EX: "nome: String", mas se for colocar algo a mais sim.
        nome: {
            type: String, //colocar o tipo eo valor 
            required: [true, "O campo NOME é obrigatório!"]//Ele é um requerimento obrigatário/true, aqui pode colocar todas as validaçoes q achar necessário
        },
        valor: {
            type: Number,
            required: [true, "O compo valor é obrigatório!"],
            min: [1, "Valor minimo de R$1,00"],//min e max é para valor numérico 
        },
},
    {
        timestamps: true,
    }
);

export { creditoShema }; //dizendo para o mongoose q esse esquema tem q ser controlado, pegar a hr atual e dizer quando foi altera.


