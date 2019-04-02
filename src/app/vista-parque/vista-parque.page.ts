import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController } from "@ionic/angular";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AgmCoreModule } from '@agm/core';

declare var google;
@Component({
  selector: 'app-vista-parque',
  templateUrl: './vista-parque.page.html',
  styleUrls: ['./vista-parque.page.scss'],
})
export class VistaParquePage implements OnInit {
  title: string = ' ';
  lat: number;
  lng: number;
   
  zoom: number = 8;

  public arreglo: Array<{ lat: any, lng: any, title: string}> = [
    {lat:4.5646909859967,lng:-74.1650178231759, title:'DESARROLLO ARBORIZADORA ALTA'}, 
    {lat:4.5619427108137,lng:-74.1009777961402, title:'URBANIZACIÓN LAS GUACAMAYA'},
    {lat:4.5751412157082,lng:-74.0813525154779, title:'SANTA ANA SUR ETAPA I'}  // local, base de datos dinamico
  ];
  constructor(public navCtrl: NavController,private geolocation:Geolocation, public load:LoadingController) { }

  ngOnInit() {
    //this.loadMap();
    this.getUserLocation();
  }
  irCoordenadaParque() {
    this.navCtrl.navigateForward("coordenada-uno");
  }

  mostrarAmbiente() {
    this.navCtrl.navigateForward('ambientes');
  }

  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat= position.coords.latitude;
        this.lng= position.coords.longitude;
        
      });
    }
  }
  //
  private addMarket(){
    for(let i=0;i<this.arreglo.length;i++){
     this.paintMarket(this.arreglo[i].lat,this.arreglo[i].lng); // pintar los marcadores de las otras ubicaciones
    }
  }

  private paintMarket(lat:number,lng:number){
    const marker = new google.maps.Marker({
      position:{lat,lng},
      zoom:8,
     // map:this.mapRef,
     // title:'hello word'
    });
  }



  /*
  async loadMap(){
    //Metodo o funcion que utilizamos para pintar icono de ubicacion, en donde se encuentre ubicado el dispositivo
    const loadging =  await this.load.create();
    loadging.present();
    const mylatlng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById("map");
    this.mapRef = new google.maps.Map(mapEle,{
      center:mylatlng,
      zoom:12
    });
    google.maps.event.addListenerOnce(this.mapRef,'idle',()=>{
        loadging.dismiss();
        this.paintMarket(mylatlng.lat,mylatlng.lng);
    });
    //
    this.addMarket(); // llamar funcion del arreglo
   
  }

  private paintMarket(lat:number,lng:number){
    const marker = new google.maps.Marker({
      position:{lat,lng},
      zoom:8,
      map:this.mapRef,
      title:'hello word'
    });
  }
   private async getLocation (){
    const rta = await this.geolocation.getCurrentPosition(); // agregar ubicacion actual
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };  
   }

   private addMarket(){
     for(let i=0;i<this.arreglo.length;i++){
      this.paintMarket(this.arreglo[i].lat,this.arreglo[i].lng); // pintar los marcadores de las otras ubicaciones
     }
   }
   currentLocate(event){
     console.log(event);
   }*/

}
