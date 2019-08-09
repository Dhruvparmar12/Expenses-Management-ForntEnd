import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../../url';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private auth: AuthenticationService, private route: Router, private http: HttpClient) { }

  public getExpense(): Observable<any> {
    return this.http.get(`${url.myurl}expenses/allexpenses`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public addExpnses(data): Observable<any> {
    return this.http.post(`${url.myurl}expenses/add`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public findExpnses(index: number): Observable<any> {
    return this.http.get(`${url.myurl}expenses/${index}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public deleteExpenses(index: number): Observable<any> {
    return this.http.delete(`${url.myurl}expenses/delete/${index}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public updateExpenses(data, index): Observable<any> {
    return this.http.patch(`${url.myurl}expenses/update/${index}`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }


}
