import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Consulta } from '../../models/consulta/consulta';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-add-consulta-modal',
  templateUrl: 'add-consulta-modal.html',
})
export class AddConsultaModalPage {

  consulta = {} as Consulta;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController) {
      let preselectedDate = moment(this.navParams.get('selectedDay')).format();
      //this.event.startTime = preselectedDate;
      //this.event.endTime = preselectedDate;
      this.consulta.startDate = preselectedDate;
      this.consulta.endDate = preselectedDate;
  }
  
  closeConsultaPage() {
    this.view.dismiss();
  }

  marcarConsulta() {
    this.view.dismiss(this.consulta);
  }
  
}
