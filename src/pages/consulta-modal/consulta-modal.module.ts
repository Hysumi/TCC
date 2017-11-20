import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaModalPage } from './consulta-modal';

@NgModule({
  declarations: [
    ConsultaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaModalPage),
  ],
})
export class ConsultaModalPageModule {}
