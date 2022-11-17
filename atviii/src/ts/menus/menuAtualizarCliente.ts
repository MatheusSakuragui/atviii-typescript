import Menu from "../interfaces/menu";

export default class MenuEditarCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`**************ATUALIZAR TITULAR**************`)
        console.log(`| O que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome Social`)
        console.log(`| 3 - Data de Nascimento`)
        console.log(`| 4 - Endereço`)
        console.log(`| 5 - Telefone`)
        console.log(`| 6 - Dependentes`)
        console.log(`| 7 - Documentos`)
        console.log(`| 8 - Escolher outro cliente`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}