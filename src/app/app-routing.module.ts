import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'productos', loadChildren: ()=> import('./features/productos/productos.module').then(m => m.ProductosModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
