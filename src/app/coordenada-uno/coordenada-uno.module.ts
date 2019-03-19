import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoordenadaUnoPage } from './coordenada-uno.page';

const routes: Routes = [
  {
    path: '',
    component: CoordenadaUnoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoordenadaUnoPage]
})
export class CoordenadaUnoPageModule {}
