import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search-pacient-modal',
  templateUrl: 'search-pacient-modal.html',
})
export class SearchPacientModalPage {

  public tipoSangue;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPacientModalPage');
  }


  closeAddPage(){
    this.view.dismiss();
  }
  
}
