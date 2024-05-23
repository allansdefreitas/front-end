let saldo = 3000;

alert("Testing compiling wiht TypeScript");

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; // Assures that this input be an HTML Element
if(elementoSaldo != null){
        elementoSaldo.textContent = saldo.toString();
}

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

        let tipoTransacao: string = inputTipoTransacao.value;
        let valor:number = inputValor.valueAsNumber;
        let data:Date =  new Date(inputData.value);

        //     console.log(typeof(valor));

        if (tipoTransacao == "Depósito") {
                saldo += valor;
        } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
                saldo -= valor;
        }else{
                alert("Tipo de transação inválido!");
        }

        console.log("saldo: " + saldo);
        elementoSaldo.textContent = saldo.toString();

        const novaTransacao = {
                tipoTransacao: tipoTransacao,
                valor: valor,
                data: data,
        };

        console.log(novaTransacao);

        elementoFormulario.reset(); // Clean all fields

});
