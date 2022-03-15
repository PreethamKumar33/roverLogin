import { loginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: loginService) { }

  ngOnInit(): void {
  }

  registerUser(fullname:HTMLInputElement, email:HTMLInputElement, password: HTMLInputElement){
    this.loginService.userRegister(fullname.value, email.value, password.value)
  }

}
