import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';

@IonicPage()
@Component({
  selector: 'page-search-pacient-modal',
  templateUrl: 'search-pacient-modal.html',
})
export class SearchPacientModalPage {

  name;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController,
              private paciente: PacienteProvider) {
  }

  ionViewDidLoad() {
  }


  closeAddPage(){
    this.view.dismiss();
  }

  openProfile(){
    this.view.dismiss(true);    
  }
  
}
