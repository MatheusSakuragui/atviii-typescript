import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressaorCliente from "./impressorCliente";
import ImpressorDependentes from "./impressorDependentes";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressorDependente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(index?: number): string {       
        let impressao = `**********************************************************************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        if(index != undefined ){
            impressao = `************* INDEX DO DEPENDENTE: ${index.toString()} *************` + impressao
        }

        this.impressor = new ImpressorEndereco(this.cliente.Titular.Endereco.clonarEndereco())
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`


        impressao = impressao + `\n**********************************************************************************`
        return impressao
    }

}