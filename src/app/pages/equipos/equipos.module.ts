import { RouterModule } from '@angular/router';
import { EquiposComponent } from './equipos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EquiposComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EquiposModule { }
