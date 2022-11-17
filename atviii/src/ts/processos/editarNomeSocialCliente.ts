import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";


export default class EditarNomeSocialCliente extends Processo {
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
        console.log('Edição do nome social do cliente...')
        let nomeSocial = this.entrada.receberTexto('Insira o nome social: ')
        if(this.clienteTitularIndex != undefined){
            this.clientes[this.clienteTitularIndex].Dependentes[this.clienteIndex].NomeSocial = nomeSocial 
        }else{
            this.clientes[this.clienteIndex].NomeSocial = nomeSocial 
        }
        
        
    }
}