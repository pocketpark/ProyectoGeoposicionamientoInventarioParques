import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroExitosoPage } from './registro-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroExitosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroExitosoPage]
})
export class RegistroExitosoPageModule {}
