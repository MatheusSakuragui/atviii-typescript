import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";


export default class EditarEnderecoCliente extends Processo {
    clientes!: Cliente[];
    clienteIndex: number;
    constructor(clienteIndex: number){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.clienteIndex = clienteIndex
    }

    processar(): void {
        console.log('Edição do nome social do cliente...')
        let rua = this.entrada.receberTexto('Qual a rua?')
        let bairro = this.entrada.receberTexto('Qual o bairro?')
        let cidade = this.entrada.receberTexto('Qual a cidade?')
        let estado = this.entrada.receberTexto('Qual o estado?')
        let pais = this.entrada.receberTexto('Qual o país?')
        let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
        let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
        this.clientes[this.clienteIndex].Endereco = endereco
    }
}