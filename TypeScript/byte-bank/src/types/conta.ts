import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 3000;

const Conta = {
    
    getSaldo(){
        return saldo;
    },


    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(transacao: Transacao): void {

        if (transacao.tipo == TipoTransacao.DEPOSITO) {
            saldo += transacao.valor;
        } else if (transacao.tipo == TipoTransacao.TRANSFERENCIA || transacao.tipo == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= transacao.valor;
        }else{
            alert("Tipo de transação inválido!");
        }

        console.log(transacao);
        
    }
}

export default Conta;