import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Consulta } from '../../models/consulta/consulta';

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
  selectedDate;
  consultaList = [];

  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  calendar = {
    mode: 'day',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    private database: AngularFireDatabase) {

    this.database.list<Consulta>('consulta-list').valueChanges().subscribe(_data =>{
      this.consultaList = _data;
    });    
  }

  public selectOption() {
    this.calendar.mode = this.options;
  }

  
  onViewTitleChanged(e) {
    this.viewTitle = e;
  }

  onTimeSelected(ev) {
    //console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
     // (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    if (this.selectedDate) {
      if (this.calendar.mode == 'month') {
        if (this.selectedDate == ev.selectedTime) {
            this.options = 'day';
            this.calendar.mode = this.options;
        }
        else{
          this.selectedDate = ev.selectedTime;
        }
      }
      else {
        this.selectedDate = ev.selectedTime;
        //Caso tenha eventos, abrir o evento
        if (ev.events !== undefined && ev.events.length !== 0) {

        }
        else { //Caso não tenha, abrir para cadastrar uma nova consulta
          //Passa um tipo Date pro modal
          this.criarConsulta(this.selectedDate);
        }
      }
    }
    else {
      this.selectedDate = ev.selectedTime;
    }
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  criarConsulta(time) {
    const criarConsulta = this.modal.create('ConsultaModalPage', time);
    criarConsulta.present();
  }

  refresh(){
    if(this.consultaList.length > 0){
      this.eventSource = this.createEvents();
    }
  }

  convertToMinute(time){
    var minute = +time.slice(14,16);
    var hour = +time.slice(11,13) * 60;
    return minute+hour;
  }

  createEvents() {
    var events = [];
    for (var i = 0; i < this.consultaList.length; i += 1) {
      var startTime;
      var endTime;
      var startMinute = this.convertToMinute(this.consultaList[i].initialDate);
      var endMinute = this.convertToMinute(this.consultaList[i].endDate);
      var day = +this.consultaList[i].initialDate.slice(8, 10);
      var month = +this.consultaList[i].initialDate.slice(5, 7);
      var year = +this.consultaList[i].initialDate.slice(0, 4);
      startTime = new Date(year, month, day, 0, startMinute);
      endTime = new Date(year, month, day, 0, endMinute);
      events.push({
          title: this.consultaList[i].name,
          startTime: startTime,
          endTime: endTime,
          allDay: false
      });         
    }    
    return events;
  }
}
