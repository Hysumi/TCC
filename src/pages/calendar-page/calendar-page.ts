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

  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
            "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  public selectOption(){
    this.calendar.mode = this.options;

  }
  onViewTitleChanged(e){
      this.viewTitle = e;
  }
  onTimeSelected(e){
    console.log(e);
  }
}
