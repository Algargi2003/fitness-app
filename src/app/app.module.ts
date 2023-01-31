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
import { MenuDiasRutinaComponent } from './rutina/menu-dias-rutina/menu-dias-rutina.component';
import { RutinaLunesComponent } from './rutina/dias/rutina-lunes/rutina-lunes.component';
import { RutinaMartesComponent } from './rutina/dias/rutina-martes/rutina-martes.component';
import { RutinaMiercolesComponent } from './rutina/dias/rutina-miercoles/rutina-miercoles.component';
import { RutinaJuevesComponent } from './rutina/dias/rutina-jueves/rutina-jueves.component';
import { RutinaViernesComponent } from './rutina/dias/rutina-viernes/rutina-viernes.component';
import { RutinaSabadoComponent } from './rutina/dias/rutina-sabado/rutina-sabado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    MenuCalculadorasComponent,
    CaloriasComponent,
    ProteinasComponent,
    CalculadoraReglaTresComponent,
    CalculadoraCompletaComponent,
    MenuDiasRutinaComponent,
    RutinaLunesComponent,
    RutinaMartesComponent,
    RutinaMiercolesComponent,
    RutinaJuevesComponent,
    RutinaViernesComponent,
    RutinaSabadoComponent
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
