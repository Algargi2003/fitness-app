import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-completa',
  templateUrl: './calculadora-completa.component.html',
  styleUrls: ['./calculadora-completa.component.css']
})
export class CalculadoraCompletaComponent {
  vPeso!:number;
  vFactorActividad!:number;
  vObjetivo!:string;
  caloriasConsumir!:number;
  ngOnInit(){

  }
  calcular(){
    this.caloriasConsumir=0;
    this.caloriasConsumir=this.vPeso*22*(this.vFactorActividad/10);
    console.log(this.caloriasConsumir)
  }
}
