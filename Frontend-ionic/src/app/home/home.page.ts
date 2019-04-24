import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public mostrar: boolean = true;
  public usuario: any='';
  public contrasena: any='';
  public divContenedor: boolean = false;
  public divInformacion:boolean = true;
  public 
  constructor(public navCtrl: NavController) { }
  ngOnInit() {
    var global = this;
    setTimeout(
      function () {
        global.showContenerdor();
      }, 3000
    );
  }
  showContenerdor() {
    this.divContenedor = true;
    this.divInformacion=false;
  }
  ircoordenadas() {
    this.navCtrl.navigateForward("coordenada-uno");
  }
}
