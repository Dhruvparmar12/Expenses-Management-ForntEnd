import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguradService implements CanActivate {

  constructor(private auth:AuthenticationService,private route:Router) { }

  canActivate(){
    if(!this.auth.isLoggedIN()){
      this.route.navigateByUrl('/')
      return false
    }
    return true
  }
}
