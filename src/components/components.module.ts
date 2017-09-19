import { NgModule } from '@angular/core';
import { CalendarWeekComponent } from './calendar-week/calendar-week';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CalendarWeekComponent],
	imports: [IonicModule],
	exports: [CalendarWeekComponent]
})
export class ComponentsModule {}
