import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { User } from '../../models/user/user';

/**
 * Generated class for the PerfilPacientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-paciente',
  templateUrl: 'perfil-paciente.html',
})
export class PerfilPacientePage {

  paciente;
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public pp: PacienteProvider, private view: ViewController) {
    this.paciente = this.navParams.get('data');
    this.user = {
      name: this.paciente.name,
      date: this.paciente.date,
      rg: this.paciente.rg,
      address: this.paciente.address,
      phone1: this.paciente.phone1,
      phone2: this.paciente.phone2,
      email: this.paciente.email,
      bloodType: this.paciente.bloodType,
      alergia: this.paciente.alergia
    }
  }

  ionViewDidLoad() {
  }

  closeProfilePage(){
    this.view.dismiss();
  }

  updateProfile(){
    this.view.dismiss(this.user);
  }

  pacientHistory(){
    var isHistory = {isHistory: true, user: this.user};
    this.view.dismiss(isHistory);    
  }
}
