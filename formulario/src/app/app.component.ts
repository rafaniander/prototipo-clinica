import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome);
    console.log(form.value.email);
    console.log(form.value.profissao);
  }

}
