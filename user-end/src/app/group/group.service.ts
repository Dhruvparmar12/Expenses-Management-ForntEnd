import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  constructor(private auth: AuthenticationService, private route: Router, private http: HttpClient) { }

  public getGroup(): Observable<any> {
    return this.http.get(`http://localhost:1313/groups/allexpenses`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public addGroup(data): Observable<any> {
    return this.http.post(`http://localhost:1313/groups/add`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }
  public addMember(data): Observable<any> {
    return this.http.post(`http://localhost:1313/member/add`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public findGroup(index: number): Observable<any> {
    return this.http.get(`http://localhost:1313/groups/${index}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public deleteGroup(index: number): Observable<any> {
    return this.http.delete(`http://localhost:1313/groups/delete/${index}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public updateGroup(data, index): Observable<any> {
    return this.http.patch(`http://localhost:1313/groups/update/${index}`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }
}
