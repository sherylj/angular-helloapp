import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
  	user: '',
  	password: ''
  };

  constructor(private router : Router) { }

  ngOnInit() {
  }

  getSession() : void {
    if (this.login.user == 'admin' && this.login.password == 'admin') {
      this.router.navigate(["user"]);
    } else {
      alert("Invalid credentials");
    }
  }

}
