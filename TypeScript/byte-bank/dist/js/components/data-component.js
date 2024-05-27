import { formatDate } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";
const elementoDataAcesso = document.querySelector(".block-saldo time");
function renderizarData() {
    if (elementoDataAcesso !== null) {
        elementoDataAcesso.textContent = formatDate(Conta.getDataAcesso(), FormatoData.DIA_SEAMANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar: function () {
        renderizarData();
    },
};
export default DataComponent;
