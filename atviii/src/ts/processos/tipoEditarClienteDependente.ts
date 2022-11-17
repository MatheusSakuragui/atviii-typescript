import Processo from "../abstracoes/processo";
import MenuEditarCliente from "../menus/menuAtualizarCliente";
import EditarDataNascimentoCliente from "./editar/editarDataNascimentoCliente";
import EditarNomeCliente from "./editar/editarNomeCliente";
import EditarNomeSocialCliente from "./editar/editarNomeSocialCliente";


export default class TipoEditarClienteDependente extends Processo {
    clienteIndex: number;
    clienteTitular: number;
    constructor(clienteIndex: number,clienteTitular: number){
        super()
        this.clienteTitular = clienteTitular
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
                    this.processo = new EditarNomeCliente(this.clienteIndex,this.clienteTitular)
                    this.processo.processar()
                    break;
                case 2:
                    this.processo = new EditarNomeSocialCliente(this.clienteIndex,this.clienteTitular)
                    this.processo.processar()
                    break;
                case 3:
                    this.processo = new EditarDataNascimentoCliente(this.clienteIndex,this.clienteTitular)
                    this.processo.processar()
                    break;
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