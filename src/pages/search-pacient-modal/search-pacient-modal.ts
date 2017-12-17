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
  plist = [];
  showlist = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private view: ViewController,
              private paciente: PacienteProvider) {
    this.plist = this.navParams.get('list');                
  }

  ionViewDidLoad() {
  }

  findPacient(name){
    var namesList = [];   
    for (var index = 0; index < this.plist.length; index++) {
      var item = this.plist[index];
      if(item.name.includes(name)){        
        namesList.push(this.plist[index]);
      }
    }
    this.showlist = namesList;
  }

  closeAddPage(){
    this.showlist = [];
    this.view.dismiss();
  }

  openProfile(item){
    this.showlist = [];    
    this.view.dismiss(item);    
  }
  
}
