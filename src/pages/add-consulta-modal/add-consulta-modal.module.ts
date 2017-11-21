import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddConsultaModalPage } from './add-consulta-modal';

@NgModule({
  declarations: [
    AddConsultaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddConsultaModalPage),
  ],
})
export class AddConsultaModalPageModule {}
