import { Component } from '@angular/core';
import { IonicPage,
         NavController, 
         NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calendar-page',
  templateUrl: 'calendar-page.html',
})
export class CalendarPage {
  options: string = "month";
  eventSource = [];
  selectOptions = [];
  viewTitle: string;
  selectedDay = new Date();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  public selectOption(){
    this.calendar.mode = this.options;
  }
  onViewTitleChanged(e){
    this.viewTitle = e;
    console.log(e);
  }
  onTimeSelected(e){
    console.log(e);
  }
}
