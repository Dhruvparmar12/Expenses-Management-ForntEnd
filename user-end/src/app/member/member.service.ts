import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private auth:AuthenticationService, private route: Router, private http: HttpClient) { }

  public getMember(): Observable<any> {
    return this.http.get(`${this.auth.url}user/alluser`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public addMember(data): Observable<any> {
    return this.http.post(`${this.auth.url}member/add`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }
}
