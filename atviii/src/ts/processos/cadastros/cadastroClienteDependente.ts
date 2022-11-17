import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import ListagemTitulares from "../listagens/listagemTitulares";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";


export default class CadastroClienteDependente extends Processo {
    private titulares!: Cliente[]
    constructor() {
        super()
        this.titulares = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        
        console.log('Iniciando o cadastro de um novo dependente...')
        this.processo = new ListagemTitulares()
        this.processo.processar()
        
        let indexTitular = this.entrada.receberTexto('Qual o index do cliente titular?')
        let titular = this.titulares[parseInt(indexTitular)]
        let nome = this.entrada.receberTexto('Qual o nome do dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        cliente.Titular = titular
        let endereco = titular.Endereco.clonarEndereco()

        cliente.Endereco = endereco
        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)


        Armazem.InstanciaUnica.Clientes[parseInt(indexTitular)].Dependentes.push(...Armazem.InstanciaUnica.Clientes[parseInt(indexTitular)].Dependentes, cliente)

        console.log('Finalizando o cadastro do dependente...')
    }
}