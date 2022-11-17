import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import ImpressorDependentes from "../../impressores/impressorDependentes"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"


export default class ListagemTitular extends Processo {
    private clientes: Cliente[]
    private clientesDependentes: Cliente[]
    private impressor!: Impressor
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.clientesDependentes = []
    }


    processar(): void {
        
        for (let index = 0; index < this.clientes.length; index++) {
            for (let indexDependente = 0; indexDependente < this.clientes[index].Dependentes.length; indexDependente++) {
                var cliente = this.clientes[index].Dependentes[indexDependente]
                this.clientesDependentes.push(cliente) 
            }
            
        }
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.impressor = new ImpressorDependentes(this.clientesDependentes)
        console.log(this.impressor.imprimir())
        
        let index = this.entrada.receberTexto('Insira o index do Dependente: ')
        this.impressor = new ImpressaorCliente(this.clientesDependentes[parseInt(index)].Titular)
        console.log(this.impressor.imprimir())
    }

}