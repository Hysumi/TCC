import { Component } from '@angular/core';
import { Platform, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarModeService } from '../providers/calendar-mode-service/calendar-mode-service';
import { PacienteProvider } from '../providers/paciente/paciente';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'CalendarPage';

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private modal: ModalController,
    public calendarService: CalendarModeService,
    public pacienteProvider: PacienteProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

