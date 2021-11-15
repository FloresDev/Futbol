import { RouterModule } from '@angular/router';
import { EquipoDetailComponent } from './equipo-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EquipoDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EquipoDetailComponent,
  ]
})
export class EquipoDetailModule { }
