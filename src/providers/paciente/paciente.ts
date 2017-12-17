import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/user/user';
import { ModalController } from 'ionic-angular';

/*
  Generated class for the PacienteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PacienteProvider {
  pacienteList = [];

  constructor(public http: Http, public modal: ModalController) {
  }

  addPaciente(){
    let modal = this.modal.create('AddPacientModalPage');
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        let pacienteData = data;
        let plist = this.pacienteList;
        plist.push(pacienteData);
        this.pacienteList = [];
        setTimeout(()=> {
          this.pacienteList = plist;
        });
      }
    });
  }

}
