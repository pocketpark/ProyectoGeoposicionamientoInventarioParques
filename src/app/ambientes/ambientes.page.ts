import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController,ModalController,AlertController} from "@ionic/angular";
import { AmbienteModalPage } from '../ambiente-modal/ambiente-modal.page'

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.page.html',
  styleUrls: ['./ambientes.page.scss'],
})
export class AmbientesPage implements OnInit {
  public ambiente:any='';
  public estadoAmbiente:any='';
  public coordenasX:any='';
  public coordenasY:any='';
  public novedad:any='';
  constructor(
    public alertController: AlertController,
    private camera: Camera,
    public navCtrl: NavController,
    public modalController: ModalController
    //,public alertController: AlertController
    ) { 
    }

  ngOnInit() {
  }
  tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  irVistaParque() {
    console.log(this.ambiente);
    this.navCtrl.navigateForward("vista-parque");
  }
  // falta poner en la validacion de las coordenadas y la foto, cuando se consuma la API
  validarFormulario(){
    if(this.ambiente=='' || this.estadoAmbiente=='' || this.novedad==''){
      this.presentAlert();
    }else{
      this.mostrarModal();
    }
  }
  async  mostrarModal(){
      const modal = await this.modalController.create({
        component: AmbienteModalPage,
        componentProps: { 
          nombreambiente: this.ambiente, 
          nombreestadoambiente:this.estadoAmbiente, 
          nombrecoordenadax: this.coordenasX, 
          nombrecoordenaday:this.coordenasY, 
          nombrenovedad:this.novedad,
        }
      });
      return await modal.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Faltan diligenciar datos en el formulario. =(',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirm!',
  //     id:'miAlerta',
  //     message: 'Message <strong>text</strong>!!!',
  //     inputs: [
  //       {
  //         name: 'name1',
  //         type: 'text',
  //         disabled:true,
  //         value: "Ambiente: "+"cancha",
  //         placeholder: 'Ambiente'
  //       },
  //       {
  //         name: 'name2',
  //         type: 'text',
  //         value: 'Estado Ambiente'+"Sobresaliente",
  //         disabled:true,
  //         placeholder: 'Estado Ambiente'
  //       },
  //       {
  //         name: 'coordenadasY',
  //         type: 'text',
  //         value: 'Coordenadas Y'+-454122454,
  //         disabled:true,
  //         placeholder: 'coordenadas Y'
  //       },
  //       {
  //         name: 'coordenadasX',
  //         type: 'text',
  //         value: 'Coordenadas X'+5464879,
  //         disabled:true,
  //         placeholder: 'coordenadas X'
  //       },
  //       {
  //         name: 'foto',
  //         type: 'text',
  //         value: 'Foto:'+"mifoto.jpg",
  //         disabled:true,
  //         placeholder: 'foto'
  //       },
  //       {
  //         name: 'novedad',
  //         type: 'text',
  //         value: 'Novedad',
  //         disabled:true,
  //         placeholder: 'Novedad'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Okay',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }
}

