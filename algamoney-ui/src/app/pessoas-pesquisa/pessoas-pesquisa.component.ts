import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {
      nome: 'Rafael Marques', cidade: 'Estrela D Oeste', estado: 'SP', ativo: true
    },
    {
      nome: 'Renata Marques', cidade: 'Guarulhos', estado: 'SP', ativo: true
    },
    {
      nome: 'Reginaldo Marques', cidade: 'Paranapuã', estado: 'SP', ativo: true
    },
    {
      nome: 'Michel Não Lembro', cidade: 'Guarulhos', estado: 'SP', ativo: false
    },
    {
      nome: 'Rafael Novaes', cidade: 'Praia Grande', estado: 'SP', ativo: true
    },
    {
      nome: 'Maria Betânia', cidade: 'Fernandópois', estado: 'SP', ativo: true
    },
    {
      nome: 'Ricardo Ricci', cidade: 'Fernandópolis', estado: 'SP', ativo: false
    }
  ];

}
