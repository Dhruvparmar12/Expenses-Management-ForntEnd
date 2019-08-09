import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { url } from '../../url';

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  constructor(private auth: AuthenticationService, private route: Router, private http: HttpClient) { }

  public getGroup(): Observable<any> {
    return this.http.get(`${url.myurl}groups/allexpenses`)
  }

  public addGroup(data): Observable<any> {
    return this.http.post(`${url.myurl}groups/add`, data)
  }
  public addMember(data): Observable<any> {
    return this.http.post(`${url.myurl}member/add`, data)
  }

  public findGroup(index: number): Observable<any> {
    return this.http.get(`${url.myurl}groups/${index}`)
  }

  public deleteGroup(index: number): Observable<any> {
    return this.http.delete(`${url.myurl}groups/delete/${index}`)
  }

  public updateGroup(data, index): Observable<any> {
    return this.http.patch(`${url.myurl}groups/update/${index}`, data)
  }
}
