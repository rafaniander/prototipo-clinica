import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';

import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { PessoaService } from './../pessoas/pessoa.service';

import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
registerLocaleData(pt);

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService,
    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
