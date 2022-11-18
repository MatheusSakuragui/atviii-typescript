import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import ImpressorDependentes from "../../impressores/impressorDependentes"
import ImpressorHospedagem from "../../impressores/impressoresHospedagem"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"


export default class ListagemHospedes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes

    }


    processar(): void {
        var clientesAcomodados: Cliente[] = []
        this.clientes.filter(cliente=>{
            if(cliente.Acomodacao){
                clientesAcomodados.push(cliente)
            }
        })

        clientesAcomodados.map(cliente=>{
            this.impressor = new ImpressorHospedagem(cliente)
            console.log(this.impressor.imprimir())
        })

        

        

    }

}