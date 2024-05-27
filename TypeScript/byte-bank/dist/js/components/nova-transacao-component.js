import Conta from "../types/conta.js";
import SaldoComponent from "./saldo-component.js"; // importa-se um módulo default assim
// import * as saldo from "./saldo-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form"); // I know that it is an HTML form
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Submit form without reload page (to avoid the lost of data)
    if (elementoFormulario.checkValidity() == false) {
        alert("Please, fill all fields of transaction!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    const novaTransacao = {
        tipo: tipoTransacao,
        valor: valor,
        data: data,
    };
    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    elementoFormulario.reset(); // Clean all fields
});
