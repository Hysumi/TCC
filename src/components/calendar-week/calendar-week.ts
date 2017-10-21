import { Component, ViewChild } from '@angular/core';
import { CalendarModeService } from '../../providers/calendar-mode-service/calendar-mode-service';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'calendar-week',
  templateUrl: 'calendar-week.html'
})

export class CalendarWeekComponent {
  @ViewChild(Slides) slides: Slides;

  firstEntry = true;

  constructor(public calendarService: CalendarModeService) {
    this.firstEntry = true;    
  }
  

  ngOnInit(){
    this.slides.initialSlide = 2;
  }

  selectDay(day){
    console.log(day);
  }

  forwardStart(){
    console.log(this.slides.getActiveIndex());
    if(!this.firstEntry){
      //this.calendarService.weekPlus();
      console.log("fs");
    }
    else{
      this.firstEntry = false;
    }    
    this.slides.lockSwipes(true);
  }
  forwardEnd(){
    this.slides.lockSwipes(false); 
    console.log("fe");    
  }
  
  backwardStart(){
    console.log(this.slides.getActiveIndex());    
    //this.calendarService.weekMinus();    
    this.slides.lockSwipes(true);    
    console.log("bs");    
  }
  backwardEnd(){
    this.slides.lockSwipes(false);        
    console.log("be");    
  }
}
