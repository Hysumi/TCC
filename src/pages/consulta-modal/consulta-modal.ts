import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-consulta-modal',
  templateUrl: 'consulta-modal.html',
})
export class ConsultaModalPage {

  public tipoSangue;
  public time;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController) {
    this.time = navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.time.getDay());
  }


  closeAddPage(){
    this.view.dismiss();
  }
  
}
