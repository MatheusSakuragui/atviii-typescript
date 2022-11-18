import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import Acomodacao from "../modelos/acomodacao"
import Cliente from "../modelos/cliente"
import ListagemAcomodacoes from "./listagens/listagemAcomodacoes"
import ListagemTitulares from "./listagens/listagemTitulares"



export default class RealizarHospedagem extends Processo {
    private acomodacoes!: Acomodacao[]
    private titulares!: Cliente[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.titulares = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        
        console.log('Iniciando o cadastro da hospedagem...')
        this.processo = new ListagemTitulares()
        this.processo.processar()
        
        let indexTitular = this.entrada.receberNumero('Qual o index do cliente titular?')

        this.processo = new ListagemAcomodacoes()
        this.processo.processar()

        let indexAcomodacao = this.entrada.receberNumero('Qual o index da acomodação?')
        let acomodacao = this.acomodacoes[indexAcomodacao]
        this.titulares[indexTitular].Acomodacao = acomodacao
        
        
      
        console.log('Finalizando o cadastro da hospedagem...')
    }
}