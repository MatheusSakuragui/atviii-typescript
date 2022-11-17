import Processo from "../abstracoes/processo";
import MenuTipoDeletarClientes from "../menus/menuTipoDeletarCliente";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import DeletarDependente from "./deletar/deletarDependente";
import DeletarTitular from "./deletar/deletarTitular";
import ListagemDependentes from "./listagens/listagemDependente";
import ListagemTitular from "./listagens/listagemTitular";
import ListagemTitulares from "./listagens/listagemTitulares";


export default class TipoDeletarCliente extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoDeletarClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new DeletarTitular()
                this.processo.processar()
                break;
            case 2:
                this.processo = new DeletarDependente()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}