import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController} from "@ionic/angular";
@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.page.html',
  styleUrls: ['./ambientes.page.scss'],
})
export class AmbientesPage implements OnInit {

  constructor(
    private camera: Camera,
    public navCtrl: NavController) { }

  ngOnInit() {
    
  }
  tomarFoto(){
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
    irVistaParque(){
    this.navCtrl.navigateForward("vista-parque"); 
    }
}

