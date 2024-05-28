import { Transacao } from "./Transacao";


export class Conta {
    nome: string;
    saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
    transacoes: Transacao = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: any) => {
        if (key === "data"){
            return new Date();
        }else{
            return value;
        }
    }) || [];


    constructor(nome: string){
        this.nome = nome;
    }
}


const conta = new Conta("Allan Santos de Freitas");
export default conta;