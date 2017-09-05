import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPacientModalPage } from './add-pacient-modal';

@NgModule({
  declarations: [
    AddPacientModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPacientModalPage),
  ],
})
export class AddPacientModalPageModule {}
