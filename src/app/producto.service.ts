import { Injectable } from '@angular/core';
import {Categoria} from './categoria';
import {Producto} from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [];

  constructor() {

    if (this.productos.length > 0) return;
    let categoria1 = new Categoria("Procesadores");
    let categoria2 = new Categoria("Teclados");
    let categoria3 = new Categoria("Gaming");
    let defecto = 'assets/defaultProduct.jpg'
    let producto1 = new Producto("Teclado Razer", 100, [categoria2, categoria3], defecto);
    let producto2 = new Producto("Intel N100", 300, [categoria1], defecto);
    let producto3 = new Producto("Juego NSW", 50, [categoria3], defecto);
    this.productos = [producto1, producto2, producto3];
  }

  getProductos(){
    return this.productos;
  }

  getProductoNombrebyId(id: number){
    let productoElegido = this.productos[id];
    let nombre = productoElegido.getNombre();
    console.log(nombre);
    return nombre;
  }

}
