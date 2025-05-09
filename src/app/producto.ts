import {Categoria} from './categoria';

export class Producto {
  nombre: string = "";
  precio: number = 0;
  categorias: Categoria[] = [];
  image: string = "";

  constructor(nombre: string, precio: number, categorias: Categoria[], Image: string) {
    this.nombre = nombre;
    this.precio = precio;
    categorias.forEach((c) => {
      this.categorias.push(c);
    })
    this.image = Image;

  }

  getNombre(){
    return this.nombre;
  }

  getPrecio(){
    return this.precio;
  }

  getImagen(){
    return this.image;
  }
}
