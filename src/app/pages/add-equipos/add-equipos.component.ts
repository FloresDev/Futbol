import { EquiposService } from './../../services/EquiposService';
import { NgForm } from '@angular/forms';
import { Equipo } from './../../models/Equipo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equipos',
  templateUrl: './add-equipos.component.html',
  styleUrls: ['./add-equipos.component.css'],
})
export class AddEquiposComponent implements OnInit {
  equipoModel: Equipo;
  sub: any;
  validateNombre = true;
  validateTitulos = true;
  validateFecha = true;
  validateLiga = true;

  constructor(private equiposService: EquiposService, private router: Router) {
    this.equipoModel = new Equipo();
  }

  ngOnInit(): void {}

  public sendEquipoFormToComponent(newEquipo: NgForm): void {
    console.log(JSON.stringify(this.equipoModel));
    this.validateForm();
  }

  public validateForm(): void {
    if (this.equipoModel.nombre.length > 50) {
      this.validateNombre = false;
    } else {
      this.validateNombre = true;
    }

    if (this.equipoModel.titulos > 500) {
      this.validateTitulos = false;
    } else {
      this.validateTitulos = true;
    }

    if (this.equipoModel.fechaDeFundacion.length > 20) {
      this.validateFecha = false;
    } else {
      this.validateFecha = true;
    }

    if (this.equipoModel.liga.id > 5000) {
      this.validateLiga = false;
    } else {
      this.validateLiga = true;
    }
    if (
      this.validateNombre &&
      this.validateLiga &&
      this.validateFecha &&
      this.validateTitulos
    ) {
      this.sub = this.equiposService.postEquipo(this.equipoModel).subscribe(
        (response) => {
          this.router.navigate(['/equipos']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
