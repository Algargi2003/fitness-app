import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-completa',
  templateUrl: './calculadora-completa.component.html',
  styleUrls: ['./calculadora-completa.component.css']
})
export class CalculadoraCompletaComponent {
  vPeso!:number;
  vFactorActividad!:number;
  vObjetivo="";
  caloriasConsumir!:number;
  caloriasFinales!:number;
  caloriasGuardar!:string;
  verCalorias!:number;
  ngOnInit(){
    console.log()
    this.verCalorias=Number(localStorage.getItem("cal"))
  }
  calcular(){
    this.caloriasConsumir=0;
    this.caloriasFinales=0;


    this.caloriasConsumir=this.vPeso*22*(this.vFactorActividad/10);
    if(this.vObjetivo=="ganar"){
      this.caloriasFinales = this.caloriasConsumir+((this.caloriasConsumir)*(15/100));
      let guardar = this.caloriasFinales.toString();
      localStorage.setItem("cal",guardar)
    }
    if(this.vObjetivo=="perder"){
      this.caloriasFinales = this.caloriasConsumir-(this.caloriasConsumir*(20/100));
      let guardar = this.caloriasFinales.toString();
      localStorage.setItem("cal",guardar)
    }
    this.verCalorias = this.caloriasFinales;
  }

}
