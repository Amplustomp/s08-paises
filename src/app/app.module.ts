import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaisModule } from './c03_pais/pais/pais.module';
import { AppRoutingPaisModule } from './pais.routing';
import { BancoTablaComponent } from './listador/componentes/banco-tabla/banco-tabla.component';
import { PokemonTablaComponent } from './listador/componentes/pokemon-tabla/pokemon-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    BancoTablaComponent,
    PokemonTablaComponent
  ],
  imports: [
    BrowserModule,
    PaisModule,
    AppRoutingPaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
