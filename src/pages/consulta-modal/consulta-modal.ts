import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consulta-modal',
  templateUrl: 'consulta-modal.html',
})
export class ConsultaModalPage {

  consulta;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController) {
      this.consulta = this.navParams.get('cons');
  }
  
  closeConsultaPage() {
    this.view.dismiss();
  }

  atualizarConsulta(){
    this.consulta.title = this.consulta.name + ": " + this.consulta.type;
    this.view.dismiss(this.consulta);
  }

  buscarPerfil(){
    this.closeConsultaPage();    
  }
}
