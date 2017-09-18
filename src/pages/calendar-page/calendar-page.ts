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

  selectedMonth = [
    {"Name": "Janeiro", "Days": 31},
    {"Name": "Fevereiro", "Days": 28},
    {"Name": "Março", "Days": 31},
    {"Name": "Abril", "Days": 30},
    {"Name": "Maio", "Days": 31},
    {"Name": "Junho", "Days": 30},
    {"Name": "Julho", "Days": 31},
    {"Name": "Agosto", "Days": 31},
    {"Name": "Setembro", "Days": 30},
    {"Name": "Outubro", "Days": 31},
    {"Name": "Novembro", "Days": 30},
    {"Name": "Dezembro", "Days": 31},
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
      if(this.selectedWeek[_i].Day < 1){
        this.selectedWeek[_i].Month = month-1;
        this.isAnoBissexto(this.selectedWeek[_i].Month);
        this.selectedWeek[_i].Day = this.selectedMonth[this.selectedWeek[_i].Month].Days - wday + _i;        
      }
    }
    console.log(this.selectedWeek);    
  }

  selectDay(){
    this.calendar.mode = "day";
  }

  isAnoBissexto(month){
    if(month === 1){
      if(this.selectedDay.getFullYear()%4 === 0){
        this.selectedMonth[1].Days = 29;
      }
      else{
        this.selectedMonth[1].Days = 28;
      }
    }
  }
}
