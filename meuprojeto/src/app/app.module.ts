import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FuncionarioModule } from './funcionario/funcionario.module';

import { LogService } from './log.service';

import { AppComponent } from './app.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule,
    FuncionarioModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
