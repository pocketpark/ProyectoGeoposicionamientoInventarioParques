import { Component, OnInit } from '@angular/core';
import { NavController,AlertController  } from "@ionic/angular";
import { ServicioService } from '../servicios/servicio.service';
@Component({
  selector: 'app-coordenada-uno',
  templateUrl: './coordenada-uno.page.html',
  styleUrls: ['./coordenada-uno.page.scss'],
})
export class CoordenadaUnoPage implements OnInit {
  public listPark:any='';
  public VistaParque:boolean=false;
  public parqueArreglo: any;

    constructor(public navCtrl: NavController,public alertController: AlertController,public servicio: ServicioService) { }
  
  
  ngOnInit() {
    this.servicio.getParque().subscribe(
      data => {
        //debugger;
        this.parqueArreglo = data;
        // for(let i=0; data['features'].length;i++){
        //     //console.log(data['features'][i]);
        //     console.log(data['features']);
        //        }
        //console.log(data['features'][0]['properties']['NombrePar'])
        console.log(this.parqueArreglo );
      },
      erro => console.log(erro)
    );
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
