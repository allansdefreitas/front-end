import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(transacao) {
        if (transacao.tipo == TipoTransacao.DEPOSITO) {
            saldo += transacao.valor;
        }
        else if (transacao.tipo == TipoTransacao.TRANSFERENCIA || transacao.tipo == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= transacao.valor;
        }
        else {
            alert("Tipo de transação inválido!");
        }
        console.log(transacao);
    }
};
export default Conta;
