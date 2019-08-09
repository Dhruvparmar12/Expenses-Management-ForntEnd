import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../../url';

@Injectable({
  providedIn: 'root'
})
export class SplitwiseService {
  constructor(private auth:AuthenticationService, private route: Router, private http: HttpClient) { }
  
  public addExpnses(data): Observable<any> {
    return this.http.post(`${url.myurl}splitexpenses/add`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public getMyGroups(): Observable<any> {
    return this.http.get(`${url.myurl}groups/mygroup`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }
  public getMySplitExpenses(): Observable<any> {
    return this.http.get(`${url.myurl}splitexpenses/allexpenses`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public getMember(id): Observable<any> {
    return this.http.get(`${url.myurl}splitexpenses/allmember/${id}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public sattleup(index, data): Observable<any> {
    return this.http.patch(`${url.myurl}splitexpenses/update/${index}`,data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }
  
  public getStatus(): Observable<any> {
    return this.http.get(`${url.myurl}splitexpenses/amount`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

 


}
