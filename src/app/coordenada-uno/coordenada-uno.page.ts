import { Component, OnInit } from '@angular/core';
import { NavController,AlertController  } from "@ionic/angular";
@Component({
  selector: 'app-coordenada-uno',
  templateUrl: './coordenada-uno.page.html',
  styleUrls: ['./coordenada-uno.page.scss'],
})
export class CoordenadaUnoPage implements OnInit {
  public listPark:any='';
  constructor(public navCtrl: NavController,public alertController: AlertController) { }

  ngOnInit() {
  }
  irinicio() {
    this.navCtrl.navigateForward("home");
  }

  validarCoordenadas(){
    if(this.listPark!=''){
      this.irVistaParque();
    }else{
      this.presentAlert();
    }
  }
  //Falta validar ubicacion actual vs ubicacion parque
  irVistaParque() {
    this.navCtrl.navigateForward("vista-parque");
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: '<ion-img id="iconoUbicacion" style="max-height:50px;max-width:50px;" src="/assets/imagenes/iconoubicacion.png"></ion-img>Las coordenadas no fueron encontradas, por favor verifique y vuelva a ingresar las coordenadas. =(',
      buttons: ['Aceptar']
    });
    await alert.present();
  }


}
