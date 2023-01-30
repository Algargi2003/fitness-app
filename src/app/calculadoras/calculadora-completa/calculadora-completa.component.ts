import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-completa',
  templateUrl: './calculadora-completa.component.html',
  styleUrls: ['./calculadora-completa.component.css'],
})
export class CalculadoraCompletaComponent {
  vPeso!: number;
  vFactorActividad!: number;
  vObjetivo = '';
  caloriasConsumir!: number;
  caloriasFinales!: number;
  //Variables para guardar
  caloriasGuardadas!: number;
  proteinasRecomendadas!: number;
  hidratosRecomendados!: number;
  grasasRecomendadas!: number;
  //Cosas en calorias
  proteinasCal!:number;
  grasasCal!:number;
  hidratosCal!:number;

  ngOnInit() {
    this.caloriasConsumir =Math.round( Number(localStorage.getItem('cal')));
    this.proteinasRecomendadas =Math.round( Number(localStorage.getItem('prot')));
    this.grasasRecomendadas =Math.round( Number(localStorage.getItem('grasas')));
    this.hidratosRecomendados =Math.round( Number(localStorage.getItem("hidratos")));
    this.proteinasCal = this.proteinasRecomendadas*4;
    this.grasasCal = this.grasasRecomendadas*9;
    this.hidratosCal = this.hidratosRecomendados*4;
  }
  calcular() {
    let guardarCal = '';
    let guardarProt = '';
    let guardarGrasas = '';
    let guardarHidratos = '';
    if (this.vPeso==null||this.vFactorActividad==null||this.vObjetivo=="") {
      alert('Introduce todos los campos');
    } else {
      this.caloriasConsumir = this.vPeso * 22 * (this.vFactorActividad / 10);
      if (this.vObjetivo == 'ganar') {
        //Calorias
        this.caloriasConsumir =
          this.caloriasConsumir + this.caloriasConsumir * (15 / 100);
        guardarCal = this.caloriasConsumir.toString();
        //Proteinas
        this.proteinasRecomendadas = 2 * this.vPeso;
        guardarProt = this.proteinasRecomendadas.toString();
        //Grasas
        this.grasasRecomendadas = (12/10)*this.vPeso;
        guardarGrasas = this.grasasRecomendadas.toString();

      }
      if (this.vObjetivo == 'perder') {
        //Calorias
        this.caloriasConsumir =
          this.caloriasConsumir - this.caloriasConsumir * (20 / 100);
        guardarCal = this.caloriasConsumir.toString();
        //Proteinas
        this.proteinasRecomendadas = (23 / 10) * this.vPeso;
        guardarProt = this.proteinasRecomendadas.toString();
        //Grasas
        this.grasasRecomendadas = (8/10)*this.vPeso;
        guardarGrasas = this.grasasRecomendadas.toString();
      }
      //Calorias
      localStorage.setItem('cal', guardarCal);
      //Proteinas
      localStorage.setItem('prot', guardarProt);
      //Grasas
      localStorage.setItem('grasas',guardarGrasas);
      //Hidratos
      this.hidratosCal = Math.round(this.caloriasConsumir-(this.proteinasCal+this.grasasCal));
      this.hidratosRecomendados = Math.round(this.hidratosCal/4);
      guardarHidratos = this.hidratosRecomendados.toString();
      localStorage.setItem('hidratos',guardarHidratos);
      console.log(this.caloriasConsumir-(this.proteinasCal+this.grasasCal+this.hidratosCal))
    }
  }
  // calculoProteinas(){
  //   if(this.vObjetivo=="ganar"){

  //   }
  //   if(this.vObjetivo=="perder"){

  //   }
  // }
}
