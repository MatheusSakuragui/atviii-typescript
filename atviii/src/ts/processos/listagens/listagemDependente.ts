import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import ImpressorDependentes from "../../impressores/impressorDependentes";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import ListagemTitulares from "./listagemTitulares";

export default class ListagemDependentes extends Processo {
    private titulares!: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.titulares = Armazem.InstanciaUnica.Clientes
        
    }

    processar(): void {
        console.clear()
        this.processo = new ListagemTitulares()
        this.processo.processar()
        let indexTitular = this.entrada.receberTexto('Qual o index do cliente titular?')
        let titular = this.titulares[parseInt(indexTitular)]
        console.log('Iniciando a listagem dos dependentes do cliente...')
        if(titular.Dependentes.length > 0){
            this.impressor = new ImpressorDependentes(titular.Dependentes)
            console.log(this.impressor.imprimir()) 
        }else{
            console.log(`************************ CLIENTE NÃO POSSUI DEPENDENTES ************************`)
        }
    }

    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular) {
            verificacao = true
        }
        return verificacao
    }
}