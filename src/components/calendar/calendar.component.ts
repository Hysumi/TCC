import { Component, OnInit} from '@angular/core';

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
export class Calendar implements OnInit{

  public date: Date = new Date(Date.now());

  constructor() {
    console.log('Hello Calendar Component');
  }

  ngOnInit(){
     console.log('passou por aqui'); 
  }

}
