import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Calendar } from './calendar.component';
//Adicionando o módulo de calendário
import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    Calendar,
  ],
  imports: [
    IonicModule,
    CalendarModule.forRoot()
  ],
  exports: [
    Calendar
  ]
})
export class CalendarComponentModule {}
