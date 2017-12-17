import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import * as moment from 'moment';
import { CalendarModeService } from '../../providers/calendar-mode-service/calendar-mode-service';

@IonicPage()
@Component({
  selector: 'page-calendar-page',
  templateUrl: 'calendar-page.html',
})

export class CalendarPage {
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public calendarService: CalendarModeService) {  
  }

}
