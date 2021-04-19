//informações de para onde vai 


import { Router, Request, Response } from "express"; //se não sabe de onde vai ser importado coloca o from antes e da um crtl espaço nas chavez q mostra
import { CicloController } from "../controller/CicloController" 

const router = Router( ); // Ele cria um objeto de rotas para não precisar exportar
const ciclocontroller = new CicloController( ); //fazendo com que a const receba a criação do objeto

router.get("/", ciclocontroller.hellow);
router.get("/ciclo/listar", ciclocontroller.listar);
router.get("/ciclo/listar/:param1/:param2/:param3", ciclocontroller.buscarPorId); 
router.post("/ciclo/cadastrar", ciclocontroller.cadastrar);

export { router }; //exporta só um pedoço, uma const, uma classe, um método, router.

