import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar-page';
import { CalendarComponentModule } from '../../components/calendar/calendar.component.module';

@NgModule({
  declarations: [
    CalendarPage
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    CalendarComponentModule
  ],
})
export class CalendarPageModule {}
