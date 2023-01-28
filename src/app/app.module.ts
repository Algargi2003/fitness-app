import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { MenuCalculadorasComponent } from './menu-calculadoras/menu-calculadoras.component';
import { CaloriasComponent } from './calculadoras/calorias/calorias.component';
import { ProteinasComponent } from './calculadoras/proteinas/proteinas.component';
import { CalculadoraReglaTresComponent } from './calculadoras/reglaTres/calculadora-regla-tres.component';
import { CalculadoraCompletaComponent } from './calculadoras/calculadora-completa/calculadora-completa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    MenuCalculadorasComponent,
    CaloriasComponent,
    ProteinasComponent,
    CalculadoraReglaTresComponent,
    CalculadoraCompletaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
