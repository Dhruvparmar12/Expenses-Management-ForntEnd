import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../../assets/css/form.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm:FormGroup;
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.forgetPasswordForm= new FormGroup({
      u_email: new FormControl(null,[Validators.required,Validators.email])
    })
  }

  forgetPassword(){
    this.auth.forgetPassword(this.forgetPasswordForm.value).subscribe(res=>{
      if(res){
        alert(res.msg);
        localStorage.setItem('u_email',this.forgetPasswordForm.get('u_email').value)
      }
    },
    err=>{
        alert(err.error['msg']);
    })
    
  }
}
