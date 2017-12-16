import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-consulta-modal',
  templateUrl: 'consulta-modal.html',
})
export class ConsultaModalPage {

  consulta;
  consultaRef$: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController) {
  }
  
  closeConsultaPage() {
    this.view.dismiss();
  }

  atualizarConsulta(){
    this.checkIfNull();
    this.closeConsultaPage();
  }

  buscarPerfil(){
    this.closeConsultaPage();    
  }

  checkIfNull() {
    if (!this.consulta.name) {
      this.consulta.name = "Sem Nome";
    }
    if (!this.consulta.phone) {
      this.consulta.phone = "Sem Telefone";
    }

    if (!this.consulta.initialDate) {
      this.consulta.initialDate = new Date().toISOString().slice(0, 16);
    }

    if (!this.consulta.endDate) {
      this.consulta.endDate = new Date().toISOString().slice(0, 16);
    }

    if (!this.consulta.type) {
      this.consulta.type = "Sem Tipo";
    }

    if (!this.consulta.obs) {
      this.consulta.obs = "Sem Observações";
    }
  }
}
