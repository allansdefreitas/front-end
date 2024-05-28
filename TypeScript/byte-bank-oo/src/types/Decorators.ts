export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor){

    const originalMethod = descriptor.value;
    
    descriptor.value = function (valorDoDebito: number){
        
        if(valorDoDebito <= 0){
            throw new Error("O valor a ser debitado deve ser maior do que zero!");
        }

        if (valorDoDebito > this.saldo){
            throw new Error("Saldo insuficiente para realizar a operação!");
        }

        return originalMethod.apply(this, [valorDoDebito]);
    }

    return descriptor;

}