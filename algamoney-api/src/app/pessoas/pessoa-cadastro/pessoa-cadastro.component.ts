import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { Pessoa } from './../../core/model';
import { PessoaService } from './../pessoa.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService,
    private toastyService: ToastyService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Nova pessoa');

    const codigoPessoa = this.route.snapshot.params['codigo'];

    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.buscarPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
      .then(pessoaAdicionada => {
        this.toastyService.success('Pessoa cadastrada com sucesso!');
        this.router.navigate(['/pessoas', pessoaAdicionada.codigo]);
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa)
      .then(pessoaAtualizada => {
        this.pessoa = pessoaAtualizada;
        this.toastyService.success('Pessoa alterada com sucesso!');
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function () {
      this.pessoa = new Pessoa();
    }.bind(this), 1);

    this.router.navigate(['/pessoas/nova']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`);
  }

}
