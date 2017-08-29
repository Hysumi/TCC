import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the Calendar component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html'
})

export class Calendar {  
  
  weeks = [
    {Full:'Segunda', Part: 'Seg', First: 'S'},
    {Full:'Terça', Part:'Ter', First:'T'},
    {Full:'Quarta', Part:'Qua', First:'Q'},
    {Full:'Quinta', Part:'Qui', First:'Q'},
    {Full:'Sexta', Part:'Sex', First:'S'},
    {Full:'Sábado', Part:'Sab', First:'S'},
    {Full:'Domigo', Part:'Dom', First:'D'}
  ];  

  months = [
    {Name: 'Janeiro', Days: 31},
    {Name: 'Fevereiro', Days: 28},
    {Name: 'Março', Days: 31},
    {Name: 'Abril', Days: 30},
    {Name: 'Maio', Days: 31},
    {Name: 'Junho', Days: 30},
    {Name: 'Julho', Days: 31},
    {Name: 'Agosto', Days: 31},
    {Name: 'Setembro', Days: 30},
    {Name: 'Outubro', Days: 31},
    {Name: 'Novembro', Days: 30},
    {Name: 'Dezembro', Days: 31}
  ];

  slideChanged() {
    console.log("month.Name");
    //this.months.push({Name: 'Janeiro', Days: 31});
  }
  constructor() {
  }

}
