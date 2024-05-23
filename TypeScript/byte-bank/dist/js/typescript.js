/* Primitive types =============================== */
let valor = 3000;
let nome = "allan";
let isPaid = true;
let anyValue = "Allan";
anyValue = 10;
/* Arrays & Type Alias ============================ */
// I. Arrays
// In JavaScript
const lista = [];
lista.push("Dog", "Cat", 25, true, []);
// In TypeScript
const listaTs = [];
listaTs.push(15, 22, 5, 10, 57.55);
/* II. Enums ================================
A set of fixed key-values pairs, which KEY is able to be used in other parts of code */
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
//III. Tipos personalizados (Type Alias)
// JS
const novaTransacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
};
const transacao = {
    tipo: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
console.log("transacao = " + transacao);
