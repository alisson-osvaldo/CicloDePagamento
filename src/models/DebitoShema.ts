import { Schema } from "mongoose";

const debitoShema = new Schema ({
    nome: {
        type: String,
        required: [true,"O campo NOME é obrigatório!"],
    },
    valor: {
        type: Number,
        required: [true, "O campo VALOR é obrigatório!"],
        min: [1,  "Valor minimo de R$1,00"],
    },
    status: {
        type: String,
       enum: ["PAGO", "PENDENTE", "AGENDADO"], //enum: uma lista prédefinida(nunca vão mudar), para não ter q fica escrevendo
       uppercase: true  //converte um valor em minusculo para maiusculo 
    },
},
{
    timestamps: true,
}
);

export { debitoShema };