import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 3000;


function debitar(valor: number): void{
    if(valor <= 0){
        throw new Error("O valor debitado precisa ser maior que zero!")
    }else if (valor > saldo){
        throw new Error("Saldo insuficiente!");
    }
    
    saldo -= valor;
}


function creditar(valor: number): void{

    if( valor <= 0){
        throw new Error("O valor creditado deve ser maior que zero!");
    }
    saldo += valor;
}
const Conta = {

    getSaldo(){
        return saldo;
    },


    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(transacao: Transacao): void {

        if (transacao.tipo == TipoTransacao.DEPOSITO) {
            creditar(transacao.valor);
        } else if (transacao.tipo == TipoTransacao.TRANSFERENCIA || transacao.tipo == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(transacao.valor);
        }else{
            // alert("Tipo de transação inválido!");
            // return; 
            throw new Error("Tipo de transação inválido!");
        }

        console.log(transacao);
        
    }
}

export default Conta;