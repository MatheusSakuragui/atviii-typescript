import Menu from "../interfaces/menu";

export default class MenuEditarClienteDependente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`*************ATUALIZAR DEPENDENTE***************`)
        console.log(`| O que deseja atualizar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome Social`)
        console.log(`| 3 - Data de Nascimento`)
        console.log(`| 4 - Escolher outro cliente`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------`)
    }
}