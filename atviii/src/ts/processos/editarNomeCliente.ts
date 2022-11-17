import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";



export default class EditarNomeCliente extends Processo {
    clientes!: Cliente[];
    clienteIndex: number;
    clienteTitularIndex?:number
    constructor(clienteIndex: number, clienteTitularIndex?:number){
        super()
        this.clienteTitularIndex = clienteTitularIndex
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.clienteIndex = clienteIndex
    }

    processar(): void {
        console.log('Edição do nome do cliente...')
        let nome = this.entrada.receberTexto('Insira o nome: ')
        if(this.clienteTitularIndex != undefined){
            this.clientes[this.clienteTitularIndex].Dependentes[this.clienteIndex].Nome = nome
        }else{
            this.clientes[this.clienteIndex].Nome = nome 
        }
        
    }
}