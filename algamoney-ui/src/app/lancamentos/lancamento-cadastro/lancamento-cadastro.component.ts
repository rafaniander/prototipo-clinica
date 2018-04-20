import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { Lancamento } from './../../core/model';
import { CategoriaService } from '../../categorias/categoria.service';
import { PessoaService } from '../../pessoas/pessoa.service';
import { LancamentoService } from '../lancamento.service';
import { ErrorHandlerService } from '../../core/error-handler.service';


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [];

  pessoas = [];

  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private errorHandlerService: ErrorHandlerService,
    private toastyService: ToastyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['codigo']);

    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: FormControl) {
    this.lancamentoService.adicionar(this.lancamento)
      .then(() => {
        this.toastyService.success('Lançamento adicionado com sucesso!');

        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map(c => {
          return { label: c.nome, value: c.codigo };
        });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarPessoas() {
    return this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map(p => {
          return { label: p.nome, value: p.codigo };
        });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

}
