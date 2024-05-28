import { Armazenador } from "../utils/Armazenador.js";
import { ValidaDebito } from "./Decorators.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";


export class Conta {

    protected nome: string;
    protected saldo: number = Armazenador.obter<number>("saldo") || 0; // The return will be a number
    private transacoes: Transacao[] = Armazenador.obter<Transacao[]>(("transacoes"), (key: string, value: any) => {
        if (key === "data"){
            return new Date();
        }else{
            return value;
        }
    }) || [];


    constructor(nome: string){
        this.nome = nome;
    }

    public getTitular(){
        return this.nome;
    }

    public getSaldo(){
        return this.saldo;
    }

    public getDataAcesso(): Date {
        return new Date();
    }

    public getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    }

    public registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.creditar(novaTransacao.valor);
        } 
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        } 
        else {
            throw new Error("Tipo de Transação é inválido!");
        }

        this.transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        Armazenador.salvar("transacoes", JSON.stringify(this.transacoes));
    }

    @ValidaDebito
    private debitar(valor: number): void {
        this.saldo -= valor;
       Armazenador.salvar("saldo", this.saldo.toString());
    }
    
    private creditar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor a ser creditado deve ser maior que zero!");
        }
    
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }
}


export class ContaPremium extends Conta{
    registrarTransacao(transacao: Transacao): void {

        if (transacao.tipoTransacao === TipoTransacao.DEPOSITO){
            console.log("You earned a bonus of R$ 0.50 cents");
            transacao.valor += 0.5;
        }

        super.registrarTransacao(transacao);
    }
}


const conta = new Conta("Allan Santos de Freitas");
const contaPremium = new ContaPremium("John Reeves de Oliveira");

console.log(conta.getTitular());
export default conta;