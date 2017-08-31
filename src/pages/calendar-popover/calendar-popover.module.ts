import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPopover } from './calendar-popover';

@NgModule({
  declarations: [
    CalendarPopover,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPopover),
  ],
})
export class CalendarPopoverModule {}
