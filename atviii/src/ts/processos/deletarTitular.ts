import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"
import ListagemTitulares from "../listagens/listagemTitulares"


export default class DeletarTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        this.processo = new ListagemTitulares()
        this.processo.processar()
        let index = this.entrada.receberNumero('Digite o index do cliente: ')
        this.clientes = this.clientes.splice(index,1)
        
    }

}