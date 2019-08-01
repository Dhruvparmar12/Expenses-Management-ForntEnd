import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  sub: Subscription;
  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      u_email: new FormControl(null, [Validators.required, Validators.email]),
      u_password: new FormControl(null, [Validators.required])
    })
  }

}
