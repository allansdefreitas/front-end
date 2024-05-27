import { formatCurrency, formatDate } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; // Assures that this input be an HTML Element
const elementoDataAtual = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoDataAtual){
        const dataAtual = Conta.getDataAcesso();
        elementoDataAtual.textContent = formatDate(dataAtual, FormatoData.DIA_SEAMANA_DIA_MES_ANO);
}


renderizarSaldo();

function renderizarSaldo(): void {

        if(elementoSaldo != null){
                elementoSaldo.textContent = formatCurrency(Conta.getSaldo());
        }      
}

const SaldoComponent = {
        atualizar(){
                renderizarSaldo();
        }
}

export default SaldoComponent;