import { LoginService } from './../../services/loginService';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  userModel: User;
  sub: any;


  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.userModel = new User();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.loginService.getTokenSub().subscribe(
      (response) => {
        this.router.navigate(['/equipos']);
      },
      error => {

      }
    );
  }

  public sendFormToComponent(f: NgForm): void {
    console.log(JSON.stringify(this.userModel));
    this.loginService.postLogin(this.userModel);
  }

}
