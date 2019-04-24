import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.page.html',
  styleUrls: ['./registro-exitoso.page.scss'],
})
export class RegistroExitosoPage implements OnInit {

  constructor(public navControl:NavController) { }

  ngOnInit() {
  }
  otroRegistro(){
    this.navControl.navigateRoot('ambientes');
  }
  cancelarRegistro(){
    this.navControl.navigateRoot('home');
  }
}
