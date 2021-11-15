import { Equipo } from './../models/Equipo';
import { LoginService } from './loginService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class EquiposService {
  private peliculas: Array<Equipo>;
  private URL_EQUIPOS = 'http://localhost:8080/api/equipos/';
  private URL_EQUIPOSBYNAME = 'http://localhost:8080/api/equiposConNombre';
  private URL_EQUIPOSBYNAMEANDDATE = 'http://localhost:8080/api/equiposDeUnaLigaPorFechaDeFundacion';

  public getPeliculas(): Array<Equipo> {
    return this.peliculas;
  }

  public setPeliculas(peliculas: Array<Equipo>): void {
    this.peliculas = peliculas;
  }

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
    ) {
    this.peliculas = new Array<Equipo>();
  }

  public APIgetPeliculas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' + this.loginService.getToken()
      }),
    };
    return this.httpClient.get(this.URL_EQUIPOS, httpOptions);
  }

  public APIgetEquiposByName(param1: string): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
         'Content-Type' : 'application/json',
         Authorization : 'Bearer ' + this.loginService.getToken()
        }),
        params: new HttpParams().set('nombre', param1)
     };
    return this.httpClient.get(this.URL_EQUIPOSBYNAME, httpOptions);
  }

  public getByNombreAndFecha(nombre: string, fecha: string): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({
         'Content-Type' : 'application/json',
         Authorization : 'Bearer ' + this.loginService.getToken()
        }),
        params: new HttpParams().set('nombre', nombre).append('fecha', fecha)
     };

    return this.httpClient.get(this.URL_EQUIPOSBYNAMEANDDATE, httpOptions);
}

public deleteEquipo(id: number): Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + this.loginService.getToken()
    }),
  };
  return this.httpClient.delete(this.URL_EQUIPOS + id, httpOptions);
}

public getEquipoByid(id: number): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + this.loginService.getToken()
    }),
  };
  return this.httpClient.get(this.URL_EQUIPOS + id, httpOptions);
}

public postEquipo(equipo: Equipo): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' + this.loginService.getToken()
    }),
  };
  return this.httpClient.post(this.URL_EQUIPOS, JSON.stringify(equipo), httpOptions);
}

}
