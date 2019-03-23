import { Component } from '@angular/core';
import { NavController} from "@ionic/angular";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mostrar:boolean=true;
  public usuario:any;
  public contrasena:any;
  constructor (public navCtrl: NavController) { }

  ircoordenadas(){
    this.navCtrl.navigateForward("coordenada-uno");
  }
}
