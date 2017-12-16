import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPacientePage } from './perfil-paciente';

@NgModule({
  declarations: [
    PerfilPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPacientePage),
  ],
})
export class PerfilPacientePageModule {}
