import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private route:Router, private auth:AuthenticationService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      u_name: new FormControl(null,[Validators.required]),
      u_email: new FormControl(null, [Validators.required, Validators.email]),
      u_password: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/)]),
      c_password:new FormControl(null,[Validators.required]),
      u_mobile:new FormControl(null,[Validators.required,Validators.maxLength(13),Validators.minLength(10)])
    })
  }

  signUp(){
    this.auth.register(this.signupForm.value).subscribe(res=>{
      if(res){
        alert(res.msg);
        this.route.navigate(['/']);
      }      
    },
    err=>{
      if(err){
        alert(err.error.msg);
      }
    }
    
    )
    
  }
}
