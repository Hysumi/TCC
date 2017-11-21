import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Consulta } from '../../models/consulta/consulta';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-consulta-modal',
  templateUrl: 'consulta-modal.html',
})
export class ConsultaModalPage {

  consulta = {} as Consulta;
  consultaRef$: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private database: AngularFireDatabase) {

    this.consultaRef$ = this.database.list('consulta-list').valueChanges();
    this.consulta.initialDate = this.navParams.data.toISOString().slice(0, 16);
    this.consulta.endDate = this.navParams.data.toISOString().slice(0, 16);
  }
  
  closeConsultaPage() {
    this.view.dismiss();
  }

  marcarConsulta() {
    this.checkIfNull();

    this.database.list('consulta-list').push(this.consulta);

    this.consulta = {} as Consulta;
    this.view.dismiss();
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
