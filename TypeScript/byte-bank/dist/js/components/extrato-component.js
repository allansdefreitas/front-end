import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";
import { formatCurrency, formatDate } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderExtrato();
function renderExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem +=
                `
            <div class="transacao-item">
            <div class="transacao-info">
              <span class="tipo">${transacao.tipo}</span>
              <strong class="valor">${formatCurrency(transacao.valor)}</strong>
            </div>
            <time class="data">${formatDate(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
        }
        htmlRegistroTransacoes +=
            `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>
    `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações registradas</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
