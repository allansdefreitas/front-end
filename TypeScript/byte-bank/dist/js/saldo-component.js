let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor"); // Assures that this input be an HTML Element
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
