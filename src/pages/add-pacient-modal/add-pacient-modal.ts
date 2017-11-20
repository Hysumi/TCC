import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user/user';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-add-pacient-modal',
  templateUrl: 'add-pacient-modal.html',
})
export class AddPacientModalPage {

  user = {} as User;
  
  //public tipoSangue;
  userRef$: Observable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController,
              private database: AngularFireDatabase) {
    this.userRef$ = this.database.list('pacientes-list').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPacientModalPage');
  }


  closeAddPage(){
    this.view.dismiss();
  }

  addPaciente(){
    this.checkIfNull();
    this.database.list('pacientes-list').push({
      name: this.user.name,
      date: this.user.date,
      rg: this.user.rg,
      address: this.user.address,
      phone1: this.user.phone1,
      phone2: this.user.phone2,
      email: this.user.email,
      bloodType: Number(this.user.bloodType),
      alergia: this.user.alergia
    });

    this.user = {} as User;
    this.view.dismiss();
  }

  checkIfNull(){
    if(!this.user.address){
      this.user.address = "Sem Endereço";
    }
    if(!this.user.alergia){
      this.user.alergia = "Sem Alergia";
    }
    
    if(!this.user.date){
      this.user.date = new Date();
    }

    if(!this.user.bloodType){
      this.user.bloodType = -1;
    }

    if(!this.user.email){
      this.user.email = "Sem Email";
    }

    if(!this.user.name){
      this.user.name = "Sem Nome";
    }

    if(!this.user.phone1){
      this.user.phone1 = "Sem Telefone Principal";
    }

    if(!this.user.phone2){
      this.user.phone2 = "Sem Telefone Secundário";
    }

    if(!this.user.rg){
      this.user.rg = "Sem RG";
    }
  }
  
}
