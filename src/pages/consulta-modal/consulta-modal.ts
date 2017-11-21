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
  }
  
  closeConsultaPage() {
    this.view.dismiss();
  }

}
