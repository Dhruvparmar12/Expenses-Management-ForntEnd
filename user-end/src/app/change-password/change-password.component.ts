import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      u_password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/)]),
      c_password: new FormControl(null, [Validators.required]),
      u_email: new FormControl(null)
    })
    if (localStorage.getItem('u_email')) {
      this.changePasswordForm.setValue({
        u_password: '',
        u_email: localStorage.getItem('u_email'),
        c_password: ''
      })
    }
    else {
      this.route.navigate(['/']);
    }
  }

  changePassword() {

    this.auth.changePassword(this.changePasswordForm.value).subscribe(res => {
      if (res) {
        alert(res.msg);
        localStorage.removeItem('u_email');
        this.route.navigate(['/']);
      }
    }, err => {
      if (err) {
        alert(err.error.msg);
      }
    })
  }

}
