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
  vNuevoProducto!:string;
  arrayProductos!:Array<Producto>;

  ngOnInit(){
    let list = localStorage.getItem("lista");
    if(list!=null){
      this.arrayProductos = JSON.parse(list);
    }

  }
  // guardar(){
  //   localStorage.setItem("lista",JSON.stringify(this.listado))
  //   let arr = localStorage.getItem("lista");

  //   if(arr!=null){
  //     this.arrayProductos = JSON.parse(arr);
  //   }
  //   console.log(this.arrayProductos)
  // }
  sumarProducto(id:number){
    let pos = this.arrayProductos.findIndex(pr => pr.id==id);
    this.arrayProductos[pos].cantidad++;
    localStorage.setItem("lista",JSON.stringify(this.arrayProductos))
  }
  restarProducto(id:number){
    let pos = this.arrayProductos.findIndex(pr => pr.id==id);
    if(this.arrayProductos[pos].cantidad>0){
      this.arrayProductos[pos].cantidad--;
      localStorage.setItem("lista",JSON.stringify(this.arrayProductos))
    }

  }
  verModal(){
    let modal:any = <any>document.getElementById("dialogoAnyadir");
    modal.showModal();
    let btnCancelar = document.getElementById("cancelar");
    btnCancelar?.addEventListener("click", function(){
      modal.close();
    })
  }
  anyadirProducto(){

      let pr:Producto= {
        id: this.arrayProductos.length+1,
        nombre: this.vNuevoProducto,
        cantidad: 0
      }
      this.arrayProductos.push(pr);
      localStorage.setItem("lista",JSON.stringify(this.arrayProductos));
      let modal:any = <any>document.getElementById("dialogoAnyadir");
      modal.close();


  }
  borrarProducto(id:number){
    let pos = this.arrayProductos.findIndex(pr => pr.id==id);
    this.arrayProductos.splice(pos,1)
    localStorage.setItem("lista",JSON.stringify(this.arrayProductos))
  }
}


