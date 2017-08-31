import { Component } from '@angular/core';
import { IonicPage,
         NavController, 
         NavParams,  
         ModalController, 
         AlertController,
         PopoverController } from 'ionic-angular';
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
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController, 
    private alertCtrl: AlertController,
    public popoverCtrl: PopoverController) {
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
  }
  showOptions($event){
    
  }

  openCalendarPopover(event){
    let popover = this.popoverCtrl.create('CalendarPopover');
    popover.present({
      ev: event
    });
  }
}
