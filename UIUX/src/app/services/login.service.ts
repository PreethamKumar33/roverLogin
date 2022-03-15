import { loginFormat } from './../models/login.model';
import { userFormat } from '../models/register.model';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Injectable({
  providedIn: "root",
})
export class loginService {
    private static readonly _loginUrl = "http://ec2-44-203-76-201.compute-1.amazonaws.com:8080/api/v1/auth/login";
    private static readonly _registerUrl= "http://ec2-44-203-76-201.compute-1.amazonaws.com:8080/api/v1/auth/register"
    error = new Subject<string>();

  constructor(private http: HttpClient) {}

  userRegister(fullname: string, email: string, password: string) {
    const userData: userFormat = { fullname: fullname, email: email, password: password };

    return this.http
      .post<any>(loginService._loginUrl, userData)
      .subscribe(
        (responseData) => console.log(responseData),
        (error: HttpErrorResponse) => this.error.next(error.message)
      );
  }

  userLogin(email: string, password:string){
      const loginData: loginFormat = {email:email, password:password};

      return this.http
      .post<any>(loginService._registerUrl, loginData)
  }
}