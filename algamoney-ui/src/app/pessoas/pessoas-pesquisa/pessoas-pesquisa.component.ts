import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { ConfirmationService } from 'primeng/api';

import { PessoaService, PessoaFiltro } from './../pessoa.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from './../../seguranca/auth.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];

  @ViewChild('tabela') grid;

  constructor(
    private auth: AuthService,
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de pessoas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmationService.confirm({
      message: `Tem certeza que dejesa excluir ${pessoa.nome}?`,
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.toastyService.success('Pessoa excluída com sucesso!');
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  confirmarAlterarStatus(pessoa: any) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja ${pessoa.ativo ? 'inativar' : 'ativar'} ${pessoa.nome}?`,
      accept: () => {
        this.alterarStatus(pessoa);
      }
    });
  }

  alterarStatus(pessoa: any) {
    const novoStatus = !pessoa.ativo;
    this.pessoaService.alterarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.toastyService.success(`Status de ${pessoa.nome} foi alterado para ${novoStatus ? 'ativo' : 'inativo'}!`);
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

}
