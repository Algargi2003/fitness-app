import { Component } from '@angular/core';
import { toArray } from 'rxjs';
import { Producto } from '../Modelos/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  listado:Array<Producto>=[
    {
      id:1,
      nombre:"Pollo",
      cantidad:0
    },
    {
      id:2,
      nombre:"Leche",
      cantidad:0
    },
    {
      id:3,
      nombre:"Patatas",
      cantidad:0
    }

  ];
  arrayProductos!:Array<Producto>;

  ngOnInit(){

  }
  guardar(){
    localStorage.setItem("lista",JSON.stringify(this.listado))
    let arr = localStorage.getItem("lista");

    if(arr!=null){
      this.arrayProductos = JSON.parse(arr);
    }
    console.log(this.arrayProductos)
  }
  sumarProducto(id:number){
    let pos = this.arrayProductos.findIndex(pr => pr.id==id);
    this.arrayProductos[pos].cantidad++;
    localStorage.setItem("lista",JSON.stringify(this.arrayProductos))
  }
}
