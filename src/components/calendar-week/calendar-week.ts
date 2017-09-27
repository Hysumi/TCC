import { Component, ViewChild } from '@angular/core';
import { CalendarModeService } from '../../providers/calendar-mode-service/calendar-mode-service';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'calendar-week',
  templateUrl: 'calendar-week.html'
})

export class CalendarWeekComponent {
  @ViewChild(Slides) slides: Slides;

  constructor(public calendarService: CalendarModeService) {

  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  selectDay(day){
    console.log(day);
  }
}
