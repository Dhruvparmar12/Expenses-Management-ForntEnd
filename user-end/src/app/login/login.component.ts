import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '.././services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/form.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  sub: Subscription;
  constructor(private route: Router, private auth: AuthenticationService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      u_email: new FormControl(null, [Validators.required, Validators.email]),
      u_password: new FormControl(null, [Validators.required])
    })
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(res => {
      if (res) {
       
        localStorage.setItem('u_name',res.u_name);
        alert(res.msg)
        this.route.navigate(['/home']);
      }
    },
      err => {
        if (err) {
       console.log(err);
       
        }
      })

  }

}
