import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDependentes from "./impressorDependentes";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressorHospedagem implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(index?: number): string { 
        console.clear()
        let impressao = `**********************************************************************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Acomodação: ${this.cliente.Acomodacao.NomeAcomadacao}`

        impressao = impressao + `\n**********************************************************************************`
        return impressao
    }

}