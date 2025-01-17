import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

// let saldo: number =  JSON.parse( localStorage.getItem("saldo") ) || 0;
let saldo: number;
if(localStorage.getItem("saldo")){
    saldo =  JSON.parse( localStorage.getItem("saldo") )
}else{
    saldo = 0;
}

const transacoes: Transacao[] = JSON.parse( localStorage.getItem("transacoes"), (key: string, value: string ) => {
    if(key === "data"){
        return new Date(value); // Deal with date in a specific way. Convert to date object
    }else{
        return value;
    }

}) || []; // If null, receives a void array

function debitar(valor: number): void{
    if(valor <= 0){
        throw new Error("O valor debitado precisa ser maior que zero!")
    }else if (valor > saldo){
        throw new Error("Saldo insuficiente!");
    }
    
    saldo -= valor;
    localStorage.setItem( "saldo", saldo.toString() );
}


function creditar(valor: number): void{

    if( valor <= 0){
        throw new Error("O valor creditado deve ser maior que zero!");
    }
    saldo += valor;
    localStorage.setItem( "saldo", saldo.toString() );
}
const Conta = {

    getSaldo(){
        return saldo;
    },


    getDataAcesso(): Date {
        return new Date();
    },

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes); // copy (clone) the list
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime()); // order from recent to old
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas){
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", {month: "long", year: "numeric" });

            if(labelAtualGrupoTransacao != labelGrupoTransacao){
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }

            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(transacao: Transacao): void {

        if (transacao.tipo == TipoTransacao.DEPOSITO) {
            creditar(transacao.valor);
        } else if (transacao.tipo == TipoTransacao.TRANSFERENCIA || transacao.tipo == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(transacao.valor);
            transacao.valor *= -1; // to show a negative value
        }else{
            // alert("Tipo de transação inválido!");
            // return; 
            throw new Error("Tipo de transação inválido!");
        }
        transacoes.push(transacao);
        console.log("grupos transações: ", this.getGruposTransacoes());
        localStorage.setItem( "transacoes", JSON.stringify(transacoes) );   
    },

    agruparTransacoes(): ResumoTransacoes {
        const resumo: ResumoTransacoes = { 
            totalDepositos: 0, 
            totalTransferencias: 0, 
            totalPagamentosBoleto: 0 
        };
    
        this.transacoes.forEach(transacao => {
            switch (transacao.tipoTransacao) {
                case TipoTransacao.DEPOSITO:
                    resumo.totalDepositos += transacao.valor;
                    break;
    
                case TipoTransacao.TRANSFERENCIA:
                    resumo.totalTransferencias += transacao.valor;
                    break;
    
                case TipoTransacao.PAGAMENTO_BOLETO:
                    resumo.totalPagamentosBoleto += transacao.valor;
                    break;
            }
        });
    
        return resumo;
    }
    
    
}

export default Conta;