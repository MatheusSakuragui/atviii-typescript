import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";


export default class EditarDataNascimentoCliente extends Processo {
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
        console.log('Edição da data de nascimento do cliente...')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        if(this.clienteTitularIndex != undefined){
            this.clientes[this.clienteTitularIndex].Dependentes[this.clienteIndex].DataNascimento = dataNascimento 
        }else{
            this.clientes[this.clienteIndex].DataNascimento = dataNascimento
        }
         
        
    }
}