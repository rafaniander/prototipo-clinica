import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Empresário', 'Outra'];
  profissao = 'Outra';

  salvar(form: NgForm) {
    console.log(`Profissão padrão: ${this.profissao}`);
    console.log(`Nome: ${form.value.nome}`);
    console.log(`E-mail: ${form.value.email}`);
    console.log(`Profissão: ${form.value.profissao}`);
  }

}
