import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ConsultaCalendar } from '../../models/consulta/consulta-calendar';
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

  consultaList = []
  consultaCalendarList = {} as ConsultaCalendar[];

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
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);

    if (this.selectedDate) {
      if (this.calendar.mode == 'month') {
        if (this.selectedDate == ev.selectedTime) {
          this.options = 'day';
          this.calendar.mode = this.options;
        }
      }
      else {
        this.selectedDate = ev.selectedTime;
        //Caso tenha eventos, abrir o evento
        if (ev.events !== undefined && ev.events.length !== 0) {

        }
        else { //Caso não tenha, abrir para cadastrar uma nova consulta
          console.log(this.selectedDate.getMonth());
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
    console.log(this.consultaList);
  }
}
