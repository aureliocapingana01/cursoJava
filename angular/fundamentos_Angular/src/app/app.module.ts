import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { primeiroComponenteComponent } from './primeiro-componente/primeiro-componente';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultipicarPorPipe } from './multipicar-por.pipe';
import { PiperCosyumizadoComponent } from './piper-cosyumizado/piper-cosyumizado.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    primeiroComponenteComponent,
    SegundoComponenteComponent,
    MultipicarPorPipe,
    PiperCosyumizadoComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
