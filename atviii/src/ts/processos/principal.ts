import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import GerarScript from "../script/script"
import ListagemAcomodacoes from "./listagens/listagemAcomodacoes"
import ListagemHospedes from "./listagens/listagemHospedes"
import ListagemTitulares from "./listagens/listagemTitulares"
import RealizarHospedagem from "./realizarHospedagem"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoDeletarCliente from "./tipoDeletarCliente"
import TipoEditarCliente from "./tipoEditarCliente"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {

    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                let index = this.entrada.receberNumero('Digite o index do cliente')
                this.processo = new TipoEditarCliente(index)
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoDeletarCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new RealizarHospedagem()
                this.processo.processar()
                break
            case 7:
                this.processo = new ListagemHospedes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}