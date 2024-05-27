import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import Conta from "../types/conta.js";
import SaldoComponent from "./saldo-component.js"; // importa-se um módulo default assim
// import * as saldo from "./saldo-component.js";



const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement; // I know that it is an HTML form

elementoFormulario.addEventListener("submit", function (event) {
        
        event.preventDefault(); // Submit form without reload page (to avoid the lost of data)
        if (elementoFormulario.checkValidity() == false) {
                alert("Please, fill all fields of transaction!");
                return;
        } 

        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor:number = inputValor.valueAsNumber;
        let data:Date =  new Date(inputData.value);

        const novaTransacao: Transacao = {
                tipo: tipoTransacao,
                valor: valor,
                data: data,
        };
        
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        elementoFormulario.reset(); // Clean all fields

});
