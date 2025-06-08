# 🅰️ Angular Basics - Conceptos Básicos de Angular  

📚 Repositorio con ejemplos para aprender los fundamentos de Angular  

## 📂 Estructura del Proyecto  

- **📁 /src/app/components** - Componentes principales  
- **📁 /src/app/directives** - Directivas personalizadas  
- **📁 /src/app/pipes** - Pipes personalizados  
- **📁 /src/app/services** - Servicios y lógica de negocio  
- **📄 /src/app/app.module.ts** - Módulo principal  
- **📄 /src/app/app-routing.module.ts** - Configuración de rutas  

## 🗺️ Configuración de Rutas (Routing)  

Angular utiliza un sistema de routing para mostrar componentes dinámicamente:  

1. **Routes**: Se definen en el módulo de routing:  
`const routes: Routes = [ { path: 'home', component: HomeComponent }, { path: 'about', component: AboutComponent } ];`  

2. **RouterLink**: En las plantillas HTML se usa para navegar:  
`<a routerLink="/home">Inicio</a>`  
`<a routerLink="/about">Acerca de</a>`  

3. **RouterOutlet**: Donde se renderizan los componentes:  
`<router-outlet></router-outlet>`  

## 🚀 Componentes Standalone (Independientes)  

Los componentes standalone son una característica moderna de Angular que:  

✔️ **No requieren NgModule**: Se declaran como independientes  

💡 **Ventajas**:  
- Menos código boilerplate  
- Mejor organización  
- Más fáciles de reutilizar  

🛠️ **Cómo usarlos**:  
- Se marcan con `standalone: true`  
- Importan sus propias dependencias  

`@Component({ standalone: true, imports: [CommonModule], template: '...' })`  

## ⚙️ Configuración Básica  

1. Clonar repositorio:  
`git clone https://github.com/MikeMoralesDEV/AngularBasics.git`  

2. Instalar dependencias:  
`npm install`  

3. Ejecutar aplicación:  
`ng serve`  

## 📚 Recursos Adicionales  
🔗 [Documentación Angular](https://angular.io/docs)  
🔗 [Guía de Routing](https://angular.io/guide/router)  

## 📜 Licencia  
MIT License  ****
