import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import ImpressorDependentes from "../../impressores/impressorDependentes"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"
import ListagemTitulares from "../listagens/listagemTitulares"


export default class DeletarDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        this.processo = new ListagemTitulares()
        this.processo.processar()
        let index = this.entrada.receberNumero('Digite o index do cliente titular: ')
        this.impressor = new ImpressorDependentes(this.clientes[index].Dependentes)
        console.log(this.impressor.imprimir())
        let indexDependente = this.entrada.receberNumero('Digite o index do cliente dependente: ')
        this.clientes = this.clientes[index].Dependentes.splice(indexDependente,1)
    }

}