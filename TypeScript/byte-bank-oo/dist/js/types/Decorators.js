var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export function ValidaDebito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado deve ser maior do que zero!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Saldo insuficiente para realizar a operação!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaCredito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoCredito) {
        if (valorDoCredito <= 0) {
            throw new Error("O valor a ser creditado dever ser maior do que zero!");
        }
        return originalMethod.apply(this, [valorDoCredito]);
    };
    return descriptor;
}
// Just for fun/learn:
// Define um decorator de método chamado LogTempo
export function LogTempo(target, propertyKey, descriptor) {
    // Guarda uma referência ao método original
    const originalMethod = descriptor.value;
    // Substitui o método original por uma nova função
    descriptor.value = function (...args) {
        // Obtém o tempo inicial
        const startTime = Date.now();
        // Chama o método original com os argumentos originais
        const result = originalMethod.apply(this, args);
        // Obtém o tempo final
        const endTime = Date.now();
        // Calcula a diferença em milissegundos
        const duration = endTime - startTime;
        // Registra o tempo de execução no console
        console.log(`O método ${propertyKey} levou ${duration} ms para executar.`);
        // Retorna o resultado original
        return result;
    };
    // Retorna o descritor modificado
    return descriptor;
}
/* LEARN: DECORATORS =================================================================================  */
/* DECLARE ========== */
// Define um decorator de método chamado ValidaString
export function ValidaString(target, propertyKey, descriptor) {
    // Guarda uma referência ao método original
    const originalMethod = descriptor.value;
    // Substitui o método original por uma nova função
    descriptor.value = function (valor) {
        // Verifica se o valor é uma string
        if (typeof valor !== "string") {
            // Se não for, lança um erro
            throw new Error("O valor deve ser uma string!");
        }
        // Se for, chama o método original com o valor como argumento
        return originalMethod.apply(this, [valor]);
    };
    // Retorna o descritor modificado
    return descriptor;
}
/* USE ========== */
// Importa o decorator ValidaString
// import { ValidaString } from "./ValidaString";
// Define uma classe livro
class Livro {
    // Define uma propriedade titulo
    titulo;
    // Define um construtor que recebe o titulo como parâmetro
    constructor(titulo) {
        this.titulo = titulo;
    }
    // Aplica o decorator ValidaString ao método imprimirTitulo
    imprimirTitulo(valor) {
        // Imprime o valor na tela
        console.log(valor);
    }
}
__decorate([
    ValidaString
], Livro.prototype, "imprimirTitulo", null);
// Cria uma instância da classe Livro
let livro = new Livro("Senhor dos Aneis");
// Chama o método imprimirTitulo com um valor válido
livro.imprimirTitulo("Senhor dos Aneis"); // OK
// Chama o método imprimirTitulo com um valor inválido
livro.imprimirTitulo(42); // Error: O valor deve ser uma string!
