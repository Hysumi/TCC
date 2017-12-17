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
          //this.abrirConsulta(this.consultaList);
        }
        else { //Caso não tenha, abrir para cadastrar uma nova consulta
          //Passa um tipo Date pro modal
          this.addConsulta();
        }
      }
    }
    else {
      this.selectedDay = ev.selectedTime;
    }
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.startTime).format('LLLL');
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
}
