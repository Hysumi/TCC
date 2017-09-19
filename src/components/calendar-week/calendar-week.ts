import { Component } from '@angular/core';
import { CalendarModeService } from '../../providers/calendar-mode-service/calendar-mode-service';

/**
 * Generated class for the CalendarWeekComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'calendar-week',
  templateUrl: 'calendar-week.html'
})
export class CalendarWeekComponent {

  constructor(public calendarService: CalendarModeService) {
  }

}
