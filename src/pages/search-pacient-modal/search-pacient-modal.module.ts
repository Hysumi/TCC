import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPacientModalPage } from './search-pacient-modal';

@NgModule({
  declarations: [
    SearchPacientModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPacientModalPage),
  ],
})
export class SearchPacientModalPageModule {}
