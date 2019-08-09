import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '.././services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../assets/css/form.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  profielData;
  constructor(private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      u_name: new FormControl(null, [Validators.required]),
      u_email: new FormControl(null, [Validators.required, Validators.email]),
      u_mobile: new FormControl(null, [Validators.required, Validators.maxLength(13), Validators.minLength(10)])
    })
    this.auth.profile().subscribe(res => {
      if (res) {
        this.profielData = res;
        this.profileForm.setValue({
          u_name: res.msg[0]['u_name'],
          u_email: res.msg[0]['u_email'],
          u_mobile: res.msg[0]['u_mobile']
        })
      }
    })
  }
  updateProfile() {

    this.auth.updateProfile(this.profileForm.value, this.profielData.msg[0]['u_id']).subscribe(res => {
      if (res) {
        alert(res.msg);
        this.route.navigate(['/']);
      }
    }, err => {
      if (err) {
        alert(err.error.msg);
      }
    })


  }

  changePassword() {
    localStorage.setItem('u_email', this.profielData.msg[0]['u_email'])
  }

}
