import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.changePasswordForm= new FormGroup({
      u_password: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/)]),
      c_password:new FormControl(null,[Validators.required]),
    })
  }
  changePassword(){
    console.log(this.changePasswordForm.value)
  }

}
