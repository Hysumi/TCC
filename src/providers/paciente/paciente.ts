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
  searchList = [];
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
  
  searchPacient(){
    let modal = this.modal.create('SearchPacientModalPage', {list: this.pacienteList} );
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        this.pacientProfile(data);
      }
    });
  } 

  pacienteFromConsulta(infos){
    console.log(infos);    
    var _paci;
    for (var index = 0; index < this.pacienteList.length; index++) {
      if(infos.nome == this.pacienteList[index].name &&
          infos.rg == this.pacienteList[index].rg){
          _paci = this.pacienteList[index];
          continue;
      }
    }
    console.log(_paci);
    this.pacientProfile(_paci);
  }

  pacientProfile(paciente){
    let modal = this.modal.create('PerfilPacientePage', {data: paciente});
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        if(data.isHistory){

        }
        else{
          var eventIndex;
          for (var index = 0; index < this.pacienteList.length; index++) {
            if(data.name == this.pacienteList[index].name){
                eventIndex = index;
                continue;
            }
          }
          let _plist = this.pacienteList;
          _plist[eventIndex] = data;
          this.pacienteList = [];
          setTimeout(()=> {
            this.pacienteList = _plist;
            console.log(this.pacienteList);
          });
        }
      }
    });
  }

}
