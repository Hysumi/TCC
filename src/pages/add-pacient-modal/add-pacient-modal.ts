import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user/user';

@IonicPage()
@Component({
  selector: 'page-add-pacient-modal',
  templateUrl: 'add-pacient-modal.html',
})
export class AddPacientModalPage {

  user = {} as User;
  
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

  addPaciente(){
    this.view.dismiss(this.user);
  }
}
