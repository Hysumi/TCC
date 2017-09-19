import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello CalendarWeekComponent Component');
    this.text = 'Hello World';
  }

}
