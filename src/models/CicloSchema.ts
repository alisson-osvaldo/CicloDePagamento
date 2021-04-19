import {  model, Schema } from "mongoose";
import {creditoShema} from "./CreditoSchema";
import { debitoShema } from "./DebitoShema";

const cicloShema = new Schema ({
    data: {
        type: Date,
        required: [true,"O campo DATA é obrigatório!"],
    },
    creditos: [creditoShema], //Array do tipo exportado(creditoShima) ,definição do mongoose sempre vai no meio dos colxetes 
    debito: [debitoShema]
},
{
    timestamps: true,
}
);

export default model("ciclos", cicloShema); // exportar com o model do mongoose, dizer qual a coleção q queremos na base (ciclos) e quem é o esquema dessa coleção q vai ser criado lá 
//dessa maneira dizemos q esse cara vai virar um tabela/coleções