import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';

import { FuncionarioService } from './funcionario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FuncionarioFormComponent,
    FuncionarioCardComponent
  ],
  exports: [
    FuncionarioFormComponent,
    FuncionarioCardComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
