import { Component, OnInit } from '@angular/core';
import { NavController} from "@ionic/angular";
@Component({
  selector: 'app-coordenada-uno',
  templateUrl: './coordenada-uno.page.html',
  styleUrls: ['./coordenada-uno.page.scss'],
})
export class CoordenadaUnoPage implements OnInit {

  constructor (public navCtrl: NavController) { }

  ngOnInit() {
  }
  irinicio(){
    this.navCtrl.navigateForward("home"); 
  }
    
    irVistaParque(){
    this.navCtrl.navigateForward("vista-parque");
  }

}
