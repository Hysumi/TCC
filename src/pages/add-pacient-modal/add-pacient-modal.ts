import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user/user';
import { PacienteProvider } from '../../providers/paciente/paciente';

@IonicPage()
@Component({
  selector: 'page-add-pacient-modal',
  templateUrl: 'add-pacient-modal.html',
})
export class AddPacientModalPage {

  user = {} as User;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController,
              public paciente: PacienteProvider) {
  }

  ionViewDidLoad() {
  }


  closeAddPage(){
    this.view.dismiss();
  }

  addPaciente(){
    this.view.dismiss(this.user);
  }
}
