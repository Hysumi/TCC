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
  options: string = "day";
  eventSource = [];
  selectOptions = [];
  viewTitle: string;
  selectedDay = new Date();
  selectedDate;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
            "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  calendar = {
    mode: 'day',
    currentDate: new Date()
  };

  public selectOption(){
    this.calendar.mode = this.options;
  }

  onViewTitleChanged(e){
      this.viewTitle = e;
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    
    if(this.selectedDate){
      if(this.selectedDate == ev.selectedTime){
        console.log("igual");
        if(this.calendar.mode == 'month'){
          this.options = 'day';
          this.calendar.mode = this.options;
        }
      }
      else{
        this.selectedDate = ev.selectedTime;            
      }
    }
    else{
      this.selectedDate = ev.selectedTime;
    }
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }
}
