import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController } from "@ionic/angular";
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-vista-parque',
  templateUrl: './vista-parque.page.html',
  styleUrls: ['./vista-parque.page.scss'],
})
export class VistaParquePage implements OnInit {
  mapRef=null;
  constructor(public navCtrl: NavController,private geolocation:Geolocation, public load:LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }
  irCoordenadaParque() {
    this.navCtrl.navigateForward("coordenada-uno");
  }

  mostrarAmbiente() {
    this.navCtrl.navigateForward('ambientes');
  }

  async loadMap(){
    const loadging =  await this.load.create();
    loadging.present();
    const rta = await this.geolocation.getCurrentPosition();
    const mylatlng ={
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    const mapEle: HTMLElement = document.getElementById("map");
    const map = new google.maps.Map(mapEle,{
      center:mylatlng,
      zoom:12
    });
    google.maps.event.addListenerOnce(map,'idle',()=>{
        loadging.dismiss();
    });
    const marker = new google.maps.Marker({
      position:{
        lat: mylatlng.lat,
        lng: mylatlng.lng
      },
      zoom:8,
      map:map,
      title:'hello word'
    });
  }

}
