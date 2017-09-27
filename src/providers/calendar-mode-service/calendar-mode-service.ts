import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class CalendarModeService {
  
  eventSource = [];
  selectOptions = [];
  viewTitle: string;
  selectedDay = new Date();  
  weekVector = [];

  selectedWeek = [
    {Day: -1, DWeek: 0, Month: -1, Week: "Domingo"},    
    {Day: -1, DWeek: 1, Month: -1, Week: "Segunda"},
    {Day: -1, DWeek: 2, Month: -1, Week: "Terça"},
    {Day: -1, DWeek: 3, Month: -1, Week: "Quarta"},
    {Day: -1, DWeek: 4, Month: -1, Week: "Quinta"},
    {Day: -1, DWeek: 5, Month: -1, Week: "Sexta"},
    {Day: -1, DWeek: 6, Month: -1, Week: "Sábado"}
  ];

  selectedMonth = [
    {Name: "Janeiro", Days: 31},
    {Name: "Fevereiro", Days: 28},
    {Name: "Março", Days: 31},
    {Name: "Abril", Days: 30},
    {Name: "Maio", Days: 31},
    {Name: "Junho", Days: 30},
    {Name: "Julho", Days: 31},
    {Name: "Agosto", Days: 31},
    {Name: "Setembro", Days: 30},
    {Name: "Outubro", Days: 31},
    {Name: "Novembro", Days: 30},
    {Name: "Dezembro", Days: 31},
  ];

 calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public http: Http) {
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
  
  showOptions($event){
    
  }

  public selectMonth(){
    this.calendar.mode = "month";
  }
  
  selectWeek(){
    this.calendar.mode = "week";
    this.selectedWeek = this.changeSelectedWeek(this.selectedDay.getDate() - 7,
                                                this.selectedDay.getDay(),
                                                this.selectedDay.getMonth());
    
    var _week0 = _.cloneDeep(this.selectedWeek);

    this.selectedWeek = this.changeSelectedWeek(this.selectedDay.getDate(),
                                                this.selectedDay.getDay(),
                                                this.selectedDay.getMonth());

    var _week1 = _.cloneDeep(this.selectedWeek);
        
    this.selectedWeek = this.changeSelectedWeek(this.selectedDay.getDate() + 7,
                                                this.selectedDay.getDay(),
                                                this.selectedDay.getMonth());

    var _week2 = _.cloneDeep(this.selectedWeek);

    this.weekVector = [
      _week0,
      _week1,
      _week2
    ]
    //console.log("Dia: " + this.selectedDay.getDate());
    //console.log("Dia da Semana: " + this.selectedDay.getDay()); //Vai de 0 a 6
    //console.log("Mês: " + this.selectedDay.getMonth());    
  }

  changeSelectedWeek(day, wday, month){
    let _selectedWeek = this.selectedWeek;
    let _selectedMonth = this.selectedMonth;
    
    for (var _i = 0; _i < _selectedWeek.length; _i++) {
      var _day = _i - wday;
      _selectedWeek[_i].Day = day + _day;
      _selectedWeek[_i].Month = month;
      if(_selectedWeek[_i].Day < 1){
        _selectedWeek[_i].Month = month-1;
        this.isAnoBissexto(month-1);
        _selectedWeek[_i].Day += _selectedMonth[month-1].Days;     
      }
      else if (_selectedWeek[_i].Day > _selectedMonth[month].Days){
        this.isAnoBissexto(month);      
        _selectedWeek[_i].Month = month + 1;
        _selectedWeek[_i].Day = _selectedWeek[_i].Day - _selectedMonth[month].Days;     
      }
    }
    return (_selectedWeek);
  }

  selectDay(){
    this.calendar.mode = "day";
  }

  isAnoBissexto(month){
    if(month === 1){
      if(this.selectedDay.getFullYear()%4 === 0){
        this.selectedMonth[1].Days = 29;
      }
      else{
        this.selectedMonth[1].Days = 28;
      }
    }
  }
}
