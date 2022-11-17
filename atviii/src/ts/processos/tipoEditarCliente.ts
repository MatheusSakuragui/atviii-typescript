import Processo from "../abstracoes/processo";
import MenuEditarCliente from "../menus/menuAtualizarCliente";
import EditarDataNascimentoCliente from "./editar/editarDataNascimentoCliente";
import EditarDependenteCliente from "./editar/editarDependentes";
import EditarEnderecoCliente from "./editar/editarEnderecoCliente";
import EditarNomeCliente from "./editar/editarNomeCliente";
import EditarNomeSocialCliente from "./editar/editarNomeSocialCliente";


export default class TipoEditarCliente extends Processo {
    clienteIndex: number;
    constructor(clienteIndex: number){
        super()
        this.clienteIndex = clienteIndex
        this.menu = new MenuEditarCliente()
    }
    
    processar(): void {
        var execucao = true
        while (execucao){
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new EditarNomeCliente(this.clienteIndex)
                    this.processo.processar()
                    break;
                case 2:
                    this.processo = new EditarNomeSocialCliente(this.clienteIndex)
                    this.processo.processar()
                    break;
                case 3:
                    this.processo = new EditarDataNascimentoCliente(this.clienteIndex)
                    this.processo.processar()
                    break;
                case 4:
                    this.processo = new EditarEnderecoCliente(this.clienteIndex)
                    this.processo.processar()
                    break;
                case 5:
                    this.processo = new EditarNomeCliente(this.clienteIndex)
                    this.processo.processar()
                    break;
                case 6:
                    this.processo = new EditarDependenteCliente(this.clienteIndex)
                    this.processo.processar()
                    break;
                case 7:
                    this.processo = new EditarDependenteCliente(this.clienteIndex)
                    this.processo.processar()
                    break
                case 8:
                    execucao = false
                    break
                case 0:
                    execucao = false
                    break
                default:
                    console.log('Opção não entendida... :(')
            }
        }
    }
}