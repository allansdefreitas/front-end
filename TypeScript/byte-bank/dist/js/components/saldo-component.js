import { formatCurrency, formatDate } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor"); // Assures that this input be an HTML Element
const elementoDataAtual = document.querySelector(".block-saldo time");
if (elementoDataAtual) {
    const dataAtual = new Date();
    elementoDataAtual.textContent = formatDate(dataAtual, FormatoData.DIA_SEAMANA_DIA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatCurrency(saldo);
    }
}
