import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="ABC"
  password="123"

  login()
  {
    if(this.username=="ABC" && this.password=="123")
    {
      alert("Login Successful")
    }
    else
    {
      alert("Wrong username or password")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
