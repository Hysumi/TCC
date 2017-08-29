import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Calendar } from './calendar.component';

@NgModule({
  declarations: [
    Calendar,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Calendar
  ]
})
export class CalendarComponentModule {}
