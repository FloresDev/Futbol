import { LoginService } from './../../services/loginService';
import { EquiposService } from './../../services/EquiposService';

import { Equipo } from '../../models/Equipo';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
})
export class EquiposComponent implements OnInit, OnDestroy {
  equipos: Array<Equipo>;
  fechaFundacion: string;
  sub: Subscription;
  nombre: string;
  fechaDeFundacion: string;
  nameFound: boolean;

  constructor(
    private equiposService: EquiposService,
    private loginService: LoginService,
    private router: Router
  ) {
    if (this.loginService.getToken() === '') {
      alert('No tenemos credenciales');
      this.router.navigate(['/login']);
    }

    this.equipos = new Array<Equipo>();
    this.fechaFundacion = '';
    this.sub = new Subscription();
    this.nombre = '';
    this.fechaDeFundacion = '';
    this.nameFound = false;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.getEquipos(this.nameFound);
  }

  public findEquipoByName(nombre: string): void {
    console.log(nombre);
    if (nombre !== '') {
      this.sub = this.equiposService.APIgetEquiposByName(nombre).subscribe(
        (response: Array<Equipo>) => {
          console.log('Tenemos respuesta');
          this.observeResponse(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert('Debes el nombre de un equipo para poder hacer la búsqueda');
    }
  }

  public observeResponse(response: Array<Equipo>): void {
    if (response.length > 0) {
      this.equipos = response;
      this.nameFound = true;
      console.log('Entro');
    } else {
      alert('No existe ningún equipo con ese nombre');
      this.nameFound = false;
    }
  }

  public findEquipoByNameAndDate(nombre: string, fecha: string): void {
    console.log('El nombre es : ' + nombre + ' y la fecha es: ' + fecha);
    this.sub = this.equiposService.getByNombreAndFecha(nombre, fecha).subscribe(
      (response) => {
        console.log('Tenemos respuesta');
        console.log(JSON.stringify(response));
        this.observeResponse(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public detailEquipo(id: number): void {
    console.log(id);
    this.router.navigate(['/equipoDetail', id]);
  }

  public getEquipos(nameFound: boolean): any {
    if (nameFound) {
      this.nameFound = false;
    }
    return this.equiposService.APIgetPeliculas().subscribe(
      (response) => {
        this.equipos = response;
      },
      (error) => {
        console.log('Error en el componente');
        console.log(error);
      }
    );
  }

  public deleteEquipo(id: number, nombre: string): void {
    console.log('el id para ser borrado es: ' + id);
    this.equiposService.deleteEquipo(id).subscribe(
      (response) => {
        alert('El equipo ' + nombre + ' se ha borrado correctamente');
        this.getEquipos(this.nameFound);
      },
      error => {
        console.log(error);
      }
    );
  }
}
