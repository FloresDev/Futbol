import { EquipoDetailModule } from './equipo-detail/equipo-detail.module';
import { LoginModule } from './login/login.module';
import { AddEquiposModule } from './add-equipos/add-equipos.module';
import { EquiposModule } from './equipos/equipos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, EquiposModule, AddEquiposModule, LoginModule, EquipoDetailModule
  ],
  exports: [EquiposModule, AddEquiposModule, LoginModule, EquipoDetailModule]
})
export class PagesModule{ }
