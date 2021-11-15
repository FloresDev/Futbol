import { AddEquiposComponent } from './add-equipos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddEquiposComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [AddEquiposComponent]
})
export class AddEquiposModule { }
