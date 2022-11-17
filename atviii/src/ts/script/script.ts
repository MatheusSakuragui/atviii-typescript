import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

export default class GerarScript {
    gerar(): void{

        let cliente1 = new Cliente ( 'Matheus', 'Lira', new Date ('2002-08-18'))
        let endereco1 = new Endereco (
            'Rua um',
            'Bosque',
            'SJC',
            'SP',
            'Brasil',
            '12214430')
        let telefone1 = new Telefone ('12', '981600811')
        let documento1 = new Documento ('41488874859', TipoDocumento.CPF, new Date ('1997-07-12'))
        let documento3 = new Documento ('482115890', TipoDocumento.RG, new Date ('1992/07/11'))

        //cliente1.Documento = documento1
        //cliente1.Documento = documento3
        //cliente1.Telefone = telefone1
        cliente1.Endereco = endereco1
        
        let armazem = Armazem.InstanciaUnica.Clientes
        armazem.push(cliente1)

        let dependente1 = new Cliente ( 'Thor', 'Odinson', new Date ('2018-03-03'))
        let dependente2 = new Cliente ( 'Fulano','De tal', new Date ('2017-02-02'))
        endereco1 = dependente1.Endereco = cliente1?.Endereco.clonarEndereco() as Endereco

        dependente1.Endereco = endereco1
        dependente2.Endereco = endereco1

        cliente1.Dependentes.push(dependente1) 
        cliente1.Dependentes.push(dependente2)
        dependente1.Titular = cliente1
        dependente2.Titular = cliente1

        armazem.push(dependente1)
        armazem.push(dependente2)
    }
}