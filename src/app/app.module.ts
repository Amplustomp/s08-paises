import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaisModule } from './c03_pais/pais/pais.module';
import { AppRoutingPaisModule } from './pais.routing';

@NgModule({
  declarations: [
    AppComponent
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
