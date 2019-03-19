import { Component } from '@angular/core';
import { NavController} from "@ionic/angular";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor (public navCtrl: NavController) { }

  ircoordenadas(){
    this.navCtrl.navigateForward("./coordenada-uno/coordenada-uno.page.html");
  }

}
