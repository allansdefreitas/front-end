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
