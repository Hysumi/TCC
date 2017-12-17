import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-calendar-page',
  templateUrl: 'calendar-page.html',
})

export class CalendarPage {
  options: string = "day";
  eventSource = [];
  selectOptions = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'day',
    currentDate: this.selectedDay
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController) {  
  }

  public selectOption() {
    this.calendar.mode = this.options;
  }
  
  onViewTitleChanged(e) {
    this.viewTitle = e;
  }

  onTimeSelected(ev) {
    if (this.selectedDay) {
      if (this.calendar.mode == 'month') {
        if (this.selectedDay == ev.selectedTime) {
            this.options = 'day';
            this.calendar.mode = this.options;
        }
        else{
          this.selectedDay = ev.selectedTime;
        }
      }
      else {
        this.selectedDay = ev.selectedTime;
        //Caso tenha eventos, abrir o evento
        if (ev.events !== undefined && ev.events.length !== 0) {
          this.openConsulta();
        }
        else { //Caso não tenha, abrir para cadastrar uma nova consulta
          this.addConsulta();
        }
      }
    }
    else {
      this.selectedDay = ev.selectedTime;
    }
  }

  onEventSelected(event) {
  }

  addConsulta(){
    let modal = this.modal.create('AddConsultaModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if(data){
        let eventData = data;
        eventData.startTime = new Date(data.startDate);
        eventData.endTime = new Date(data.endDate);
      
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(()=> {
          this.eventSource = events;
        });
      }
    });
  }

  openConsulta(){
    var consulta;
    var eventIndex;
    var timeMinute = +this.selectedDay.toISOString().slice(14,16);
    var timeHour = +this.selectedDay.toISOString().slice(11,13) - 2;
    if(timeHour == -1){
      timeHour = 23;
    }
    else if (timeHour == -2){
      timeHour = 22;
    }
    var time = timeHour*60+timeMinute;
    for (var index = 0; index < this.eventSource.length; index++) {
      var _time = this.convertToMinute(this.eventSource[index].startDate);
      if(_time == time && 
        this.selectedDay.toISOString().slice(0,10) == this.eventSource[index].startDate.slice(0,10)){
          consulta = this.eventSource[index];
          eventIndex = index;
      }
    }
    let abrirConsulta = this.modal.create('ConsultaModalPage', {cons: consulta});
    abrirConsulta.present();
    abrirConsulta.onDidDismiss(data => {
      if(data){
        let eventData = data;
      
        let events = this.eventSource;
        events[eventIndex] = eventData;
        this.eventSource = [];
        setTimeout(()=> {
          this.eventSource = events;
        });
      }
    });
  }

  convertToMinute(time) {
    var minute = +time.slice(14,16);
    var hour = +time.slice(11,13) * 60;
    return minute+hour;
  }
}
