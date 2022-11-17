import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependentes from "../../impressores/impressorDependentes";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import TipoEditarClienteDependente from "../tipoEditarClienteDependente";


export default class EditarDependenteCliente extends Processo {
    clientes!: Cliente[];
    clienteIndex: number;
    titular!: Cliente
    private impressor!: Impressor
    constructor(clienteIndex: number){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.clienteIndex = clienteIndex
        this.titular = this.clientes[this.clienteIndex]
    }

    processar(): void {
        if(this.titular.Dependentes.length > 0){
            this.impressor = new ImpressorDependentes(this.titular.Dependentes)
            console.log(this.impressor.imprimir()) 
        }else{
            return console.log(`************************ CLIENTE NÃO POSSUI DEPENDENTES ************************`)
        }
        let index = this.entrada.receberNumero("Insira o index do Dependente: ")
        this.processo = new TipoEditarClienteDependente(index,this.clienteIndex)
        this.processo.processar()
    }
}