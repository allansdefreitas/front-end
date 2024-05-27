import { FormatoData } from "../types/FormatoData.js";
export function formatCurrency(valor) {
    const valueFormatted = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    return valueFormatted;
}
export function formatDate(date, formato = FormatoData.PADRAO) {
    let formattedDate = null;
    if (formato === FormatoData.DIA_SEAMANA_DIA_MES_ANO) {
        formattedDate = date.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        formattedDate = date.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    else {
        formattedDate = date.toLocaleDateString("pt-br"); // dd/mm/aaaa
    }
    return formattedDate;
}
