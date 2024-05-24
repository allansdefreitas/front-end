let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; // Assures that this input be an HTML Element
if(elementoSaldo != null){
        elementoSaldo.textContent = formatCurrency(saldo);
}


const elementoDataAtual = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoDataAtual){
        const dataAtual = new Date();
        elementoDataAtual.textContent = formatDate(dataAtual, FormatoData.DIA_SEAMANA_DIA_MES_ANO);
}


