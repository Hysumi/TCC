import { Component } from '@angular/core';
import { IonicPage,
         NavController, 
         NavParams,  
         ModalController} from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-calendar-page',
  templateUrl: 'calendar-page.html',
})
export class CalendarPage {

  eventSource = [];
  selectOptions = [];
  viewTitle: string;
  selectedDay = new Date();
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController) {
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
    console.log("Dia: " + this.selectedDay.getDate());
    console.log("Dia da Semana: " + this.selectedDay.getDay()); //Vai de 0 a 6
    console.log("Mês: " + this.selectedDay.getMonth());    
  }
  
  showOptions($event){
    
  }

  selectMonth(){
    this.calendar.mode = "month";
  }
  
  selectWeek(){
    this.calendar.mode = "week";
  }

  selectDay(){
    this.calendar.mode = "day";
  }
}
