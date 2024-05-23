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
    //     console.log(typeof(valor));
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválido!");
    }
    console.log("saldo: " + saldo);
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipo: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset(); // Clean all fields
});
