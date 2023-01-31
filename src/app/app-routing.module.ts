import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CalculadoraCompletaComponent } from './calculadoras/calculadora-completa/calculadora-completa.component';
import { CaloriasComponent } from './calculadoras/calorias/calorias.component';
import { ProteinasComponent } from './calculadoras/proteinas/proteinas.component';
import { CalculadoraReglaTresComponent } from './calculadoras/reglaTres/calculadora-regla-tres.component';
import { MenuCalculadorasComponent } from './menu-calculadoras/menu-calculadoras.component';
import { RutinaJuevesComponent } from './rutina/dias/rutina-jueves/rutina-jueves.component';
import { RutinaLunesComponent } from './rutina/dias/rutina-lunes/rutina-lunes.component';
import { RutinaMartesComponent } from './rutina/dias/rutina-martes/rutina-martes.component';
import { RutinaMiercolesComponent } from './rutina/dias/rutina-miercoles/rutina-miercoles.component';
import { RutinaSabadoComponent } from './rutina/dias/rutina-sabado/rutina-sabado.component';
import { RutinaViernesComponent } from './rutina/dias/rutina-viernes/rutina-viernes.component';
import { MenuDiasRutinaComponent } from './rutina/menu-dias-rutina/menu-dias-rutina.component';

const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"calculadoras",component:MenuCalculadorasComponent},
  {path:"calculadoras/calorias",component:CaloriasComponent},
  {path:"calculadoras/proteinas",component:ProteinasComponent},
  {path:"calculadoras/reglatres",component:CalculadoraReglaTresComponent},
  {path:"calculadoras/completa", component:CalculadoraCompletaComponent},
  {path:"rutinas",component:MenuDiasRutinaComponent},
  {path:"rutinas/lunes",component:RutinaLunesComponent},
  {path:"rutinas/martes",component:RutinaMartesComponent},
  {path:"rutinas/miercoles",component:RutinaMiercolesComponent},
  {path:"rutinas/jueves",component:RutinaJuevesComponent},
  {path:"rutinas/viernes",component:RutinaViernesComponent},
  {path:"rutinas/sabado",component:RutinaSabadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
