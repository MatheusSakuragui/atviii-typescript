import Menu from "../interfaces/menu";

export default class MenuTipoDeletarClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Deletar titular`)
        console.log(`| 2 - Deletar dependente de um titular específico`)
        console.log(`----------------------`)
    }
}