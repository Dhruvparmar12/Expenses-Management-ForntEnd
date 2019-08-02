import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  constructor(private auth:AuthenticationService,private http: HttpClient) { }

  public forgetPassword(): Observable<any> {
    return this.http.get(this.auth.url + `user/forgetpassword`,{

    })
  }
}
