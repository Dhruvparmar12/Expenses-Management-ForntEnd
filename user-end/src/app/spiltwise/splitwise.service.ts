import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitwiseService {
  constructor(private auth:AuthenticationService, private route: Router, private http: HttpClient) { }
  
  public addExpnses(data): Observable<any> {
    return this.http.post(`${this.auth.url}splitexpenses/add`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public getMyGroups(): Observable<any> {
    return this.http.get(`${this.auth.url}groups/mygroup`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }
  public getMySplitExpenses(): Observable<any> {
    return this.http.get(`${this.auth.url}splitexpenses/allexpenses`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public getMember(id): Observable<any> {
    return this.http.get(`${this.auth.url}splitexpenses/allmember/${id}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public sattleup(index, data): Observable<any> {
    return this.http.patch(`http://localhost:1313/splitexpenses/update/${index}`,data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }
  

 


}
