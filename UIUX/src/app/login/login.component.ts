import { Component, OnInit } from '@angular/core';
import { loginService } from './../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, Subscription, throwError } from "rxjs";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: loginService) { }

  error = "";
  private errorSubscription!: Subscription;


  ngOnInit(): void {
  }

  userLogin(email:HTMLInputElement, password:HTMLInputElement){
    this.loginService
    .userLogin(email.value, password.value)
    .pipe(first())
    .subscribe(
      responseData => console.log(responseData),
      (error: HttpErrorResponse) => console.log(error.message)
    );
  }
}
