import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.forgetPasswordForm= new FormGroup({
      u_email: new FormControl(null,[Validators.required,Validators.email])
    })
  }

  forgetPassword(){
    localStorage.setItem('u_email',this.forgetPasswordForm.get('u_email').value)
  }
}
