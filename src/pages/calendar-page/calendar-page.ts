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
  selectedWeek = [
    {"Day": -1, "DWeek": 0, "Month": -1},
    {"Day": -1, "DWeek": 1, "Month": -1},
    {"Day": -1, "DWeek": 2, "Month": -1},
    {"Day": -1, "DWeek": 3, "Month": -1},
    {"Day": -1, "DWeek": 4, "Month": -1},
    {"Day": -1, "DWeek": 5, "Month": -1},
    {"Day": -1, "DWeek": 6, "Month": -1}
  ];

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
  }
  
  showOptions($event){
    
  }

  selectMonth(){
    this.calendar.mode = "month";
  }
  
  selectWeek(){
    this.calendar.mode = "week";
    this.changeSelectedWeek(this.selectedDay.getDate(),
                            this.selectedDay.getDay(),
                            this.selectedDay.getMonth());

    console.log("Dia: " + this.selectedDay.getDate());
    console.log("Dia da Semana: " + this.selectedDay.getDay()); //Vai de 0 a 6
    console.log("Mês: " + this.selectedDay.getMonth());    
  }

  changeSelectedWeek(day, wday, month){
    for (var _i = 0; _i < this.selectedWeek.length; _i++) {
      this.selectedWeek[_i].Day = day - wday + _i;
      this.selectedWeek[_i].Month = month;
    }
    console.log(this.selectedWeek);    
  }

  selectDay(){
    this.calendar.mode = "day";
  }
}
