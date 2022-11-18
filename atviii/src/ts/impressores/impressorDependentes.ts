import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"
import ImpressaorCliente from "./impressorCliente"
import ImpressorDependente from "./impressorDependente"
import ImpressorDocumento from "./impressorDocumento"

export default class ImpressorDependentes implements Impressor {
    private dependentes: Cliente[]
    private impressor!: Impressor

    constructor(dependentes:  Cliente[]) {
        this.dependentes = dependentes
    }

    imprimir(): string {
        let impressao = ``
        for (let index = 0; index < this.dependentes.length; index++) {
            impressao = impressao +`\n----------------- Dependente INDEX ${index} -------------\n`
            this.impressor = new ImpressorDependente(this.dependentes[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }

        }
        impressao = impressao + `\n-------------------------------------------------------------`
        return impressao
    }
}