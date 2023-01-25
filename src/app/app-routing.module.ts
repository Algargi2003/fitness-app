import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CaloriasComponent } from './calculadoras/calorias/calorias.component';
import { ProteinasComponent } from './calculadoras/proteinas/proteinas.component';
import { CalculadoraReglaTresComponent } from './calculadoras/reglaTres/calculadora-regla-tres.component';
import { MenuCalculadorasComponent } from './menu-calculadoras/menu-calculadoras.component';

const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"calculadoras",component:MenuCalculadorasComponent},
  {path:"calculadoras/calorias",component:CaloriasComponent},
  {path:"calculadoras/proteinas",component:ProteinasComponent},
  {path:"calculadoras/reglatres",component:CalculadoraReglaTresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
