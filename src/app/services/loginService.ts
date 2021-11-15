import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class LoginService {
  private token: string;
  private user: User;
  private token$: Subject<string>;
  private URL_LOGIN = 'http://localhost:8080/api/authenticate';

  constructor(private httpClient: HttpClient) {
    this.token = '';
    this.user = new User();
    this.token$ = new Subject<string>();
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getTokenSub(): Observable<string> {
    return this.token$.asObservable();
  }

  public postLogin(user: User): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    this.httpClient
      .post(this.URL_LOGIN, JSON.stringify(user), httpOptions)
      .subscribe(
        (response: any) => {
          console.log(response.id_token);
          this.token = response.id_token;
          this.token$.next(this.token);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
