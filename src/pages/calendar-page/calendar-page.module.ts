import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar-page';

import { NgCalendarModule } from 'ionic2-calendar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(CalendarPage),
    ComponentsModule
  ],
})
export class CalendarPageModule {}
