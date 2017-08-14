import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
   ClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
