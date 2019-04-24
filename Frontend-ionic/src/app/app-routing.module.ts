import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'coordenada-uno',
    loadChildren: './coordenada-uno/coordenada-uno.module#CoordenadaUnoPageModule' 
  },
  { 
    path: 'vista-parque',
    loadChildren: './vista-parque/vista-parque.module#VistaParquePageModule'
  },
  { 
    path: 'ambientes',
    loadChildren: './ambientes/ambientes.module#AmbientesPageModule'
  },
  { 
    path: 'ambiente-modal',
    loadChildren: './ambiente-modal/ambiente-modal.module#AmbienteModalPageModule' 
  },
  { 
    path: 'registro-exitoso',
    loadChildren: './registro-exitoso/registro-exitoso.module#RegistroExitosoPageModule'
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
