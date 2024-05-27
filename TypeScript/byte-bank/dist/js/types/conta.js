import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor debitado precisa ser maior que zero!");
    }
    else if (valor > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= valor;
}
function creditar(valor) {
    if (valor <= 0) {
        throw new Error("O valor creditado deve ser maior que zero!");
    }
    saldo += valor;
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(transacao) {
        if (transacao.tipo == TipoTransacao.DEPOSITO) {
            creditar(transacao.valor);
        }
        else if (transacao.tipo == TipoTransacao.TRANSFERENCIA || transacao.tipo == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(transacao.valor);
        }
        else {
            // alert("Tipo de transação inválido!");
            // return; 
            throw new Error("Tipo de transação inválido!");
        }
        console.log(transacao);
    }
};
export default Conta;
