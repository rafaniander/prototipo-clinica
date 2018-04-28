import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
    <div class="container">
      <h1 class="text-center">Página não encontrada</h1>
      <img src="http://f.i.uol.com.br/folha/poder/images/15138401.jpeg"
        alt="Erro 404, de página não encontrada, no site do diretório nacional do PT"
        border="0">
    </div>
  `,
  styles: []
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
