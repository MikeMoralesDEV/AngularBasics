import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ProductosComponent } from './productos/productos.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';

export const routes: Routes = [
  { path: 'Menu', component: MenuComponent },
  { path: 'Noticias', component: NoticiasComponent },
  { path: 'Productos', component: ProductosComponent },
  { path: 'Ejemplo', component: EjemploComponent },

];

