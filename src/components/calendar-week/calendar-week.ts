import { Component, ViewChild, Input } from '@angular/core';
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
  

  ngOnInit(){
    this.slides.initialSlide = 1;
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();    
    if (currentIndex === 2){
      console.log("Meio"); //Tá no centro do vetor
    }    
    else if (currentIndex === 0 || currentIndex === 3){
      console.log("fim"); //Avançou uma semana
    }
    else if (currentIndex === 1 || currentIndex === 4){
       console.log("inicio"); //recuou uma semana
    }
  }

  selectDay(day){
    console.log(day);
  }
}
