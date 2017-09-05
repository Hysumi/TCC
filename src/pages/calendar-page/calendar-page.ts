import { Component } from '@angular/core';
import { IonicPage,
         NavController, 
         NavParams,  
         ModalController, 
         AlertController} from 'ionic-angular';
import * as moment from 'moment';
//import { CalendarPopover } from '../calendar-popover/calendar-popover';

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
    mode: 'day',
    currentDate: new Date()
  };
  calendarType: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController) {
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
    console.log(this.calendar);
  }
  showOptions($event){
    
  }

  selectMonth(){
    this.calendarType = "Month";
  }
  
  selectWeek(){
    this.calendarType = "Week";
  }

  selectDay(){
    this.calendarType = "Day";
  }
}
