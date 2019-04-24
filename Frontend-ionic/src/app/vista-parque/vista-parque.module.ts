import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VistaParquePage } from './vista-parque.page';
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
  {
    path: '',
    component: VistaParquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VistaParquePage]
})
export class VistaParquePageModule {}
