import { TipoTransacao } from "./TipoTransacao.js";
// let saldo: number =  JSON.parse( localStorage.getItem("saldo") ) || 0;
let saldo;
if (localStorage.getItem("saldo")) {
    saldo = JSON.parse(localStorage.getItem("saldo"));
}
else {
    saldo = 0;
}
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    if (key === "data") {
        return new Date(value); // Deal with date in a specific way. Convert to date object
    }
    else {
        return value;
    }
}) || []; // If null, receives a void array
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor debitado precisa ser maior que zero!");
    }
    else if (valor > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString());
}
function creditar(valor) {
    if (valor <= 0) {
        throw new Error("O valor creditado deve ser maior que zero!");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(transacoes); // copy (clone) the list
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime()); // order from recent to old
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao != labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
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
        transacoes.push(transacao);
        console.log("grupos transações: ", this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
};
export default Conta;
