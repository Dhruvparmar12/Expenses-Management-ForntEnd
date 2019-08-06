import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private auth: AuthenticationService, private route: Router, private http: HttpClient) { }

  public getExpense(): Observable<any> {
    return this.http.get(`http://localhost:1313/expenses/allexpenses`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public addExpnses(data): Observable<any> {
    return this.http.post(`http://localhost:1313/expenses/add`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public findExpnses(index: number): Observable<any> {
    return this.http.get(`http://localhost:1313/expenses/${index}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public deleteExpenses(index: number): Observable<any> {
    return this.http.delete(`http://localhost:1313/expenses/delete/${index}`, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }

  public updateExpenses(data, index): Observable<any> {
    return this.http.patch(`http://localhost:1313/expenses/update/${index}`, data, {
      headers: { Authorization: ` ${this.auth.getToken()}` }
    })
  }


}
