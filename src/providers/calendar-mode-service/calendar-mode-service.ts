import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModalController } from 'ionic-angular';

@Injectable()
export class CalendarModeService {

  options: string = "day";
  eventSource = [];
  selectOptions = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'day',
    currentDate: this.selectedDay
  };

  constructor(public http: Http, public modal: ModalController) {
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
          this.openConsulta(ev.events);
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

  addConsultaLateral(){
    this.selectedDay = new Date();
    this.addConsulta();
  }

  addConsulta(){
    console.log(this.selectedDay);
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

  openConsulta(event){
    let beforeEvent = event[0];  
    let abrirConsulta = this.modal.create('ConsultaModalPage', {cons: beforeEvent});
    abrirConsulta.present();
    abrirConsulta.onDidDismiss(data => {
      if(data){
        let eventIndex;
        let eventData = data;
        console.log(eventData);
        for (var index = 0; index < this.eventSource.length; index++) {
          if(beforeEvent.startDate.slice(0,10) == this.eventSource[index].startDate.slice(0,10)){
              eventIndex = index;
              continue;
          }
        }
        let events = this.eventSource;
        events[eventIndex] = eventData;
        this.eventSource = [];
        setTimeout(()=> {
          this.eventSource = events;
        });
      }
    });
  }
}

