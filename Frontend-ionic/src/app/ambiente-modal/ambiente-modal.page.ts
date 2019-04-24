import { Component, OnInit } from '@angular/core';
import { NavController, NavParams ,ModalController } from "@ionic/angular";
@Component({
  selector: 'app-ambiente-modal',
  templateUrl: './ambiente-modal.page.html',
  styleUrls: ['./ambiente-modal.page.scss'],
})
export class AmbienteModalPage implements OnInit {
  public modalNombreAmbiente:any;
  public modalNombreEstadoAmbiente:any;
  public modalCoordenasX:any;
  public modalCoordenasY:any;
  public modalNovedad:any;
  constructor(public navCtrl: NavController,public navParams:NavParams,public modalController: ModalController) {
    this.modalNombreAmbiente=navParams.get('nombreambiente');
    this.modalNombreEstadoAmbiente=navParams.get('nombreestadoambiente');
    this.modalCoordenasX=navParams.get('nombrecoordenadax');
    this.modalCoordenasY=navParams.get('nombrecoordenaday');
    this.modalNovedad=navParams.get('nombrenovedad');
   }

  ngOnInit() {
  }
  cancelarRegistro() {
    this.modalController.dismiss();
    this.navCtrl.navigateForward("ambientes");
  }
  aceptarRegitro(){
    this.modalController.dismiss();
    this.navCtrl.navigateForward("registro-exitoso");
  }

}
