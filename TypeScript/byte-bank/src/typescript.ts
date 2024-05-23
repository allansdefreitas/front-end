/* Primitive types =============================== */
let valor: number = 3000;
let nome: string = "allan";
let isPaid: boolean = true;

let anyValue: any = "Allan";
anyValue = 10;


/* Arrays & Type Alias ============================ */
// I. Arrays
// In JavaScript
const lista = []
lista.push("Dog", "Cat", 25, true, []);

// In TypeScript
const listaTs: number[] = []
listaTs.push(15, 22, 5, 10, 57.55);


/* II. Enums ================================ 
A set of fixed key-values pairs, which KEY is able to be used in other parts of code */

enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}


//III. Tipos personalizados (Type Alias)
// JS
const novaTransacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}

// TS
type Transacao = {
    tipo: TipoTransacao;
    data: Date;
    valor: number;
}


const transacao: Transacao = {
    tipo: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}

