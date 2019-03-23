import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-vista-parque',
  templateUrl: './vista-parque.page.html',
  styleUrls: ['./vista-parque.page.scss'],
})
export class VistaParquePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  irCoordenadaParque() {
    this.navCtrl.navigateForward("coordenada-uno");
  }

  mostrarAmbiente() {
    this.navCtrl.navigateForward('ambientes');
  }
}
