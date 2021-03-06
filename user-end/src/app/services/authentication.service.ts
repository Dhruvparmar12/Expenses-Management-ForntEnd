import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { url } from '../../url'

export interface UserDetails {
  u_id: number
  u_name: string
  u_email: string
  u_password: string
  u_mobile: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {

  u_id: number
  u_name: string
  u_email: string
  u_password: string
  u_mobile: string
  c_password: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string
  constructor(private http: HttpClient, private route: Router) { }

  private saveToken(token: string, id: number): void {
    localStorage.setItem('user_id', String(id));
    localStorage.setItem('userToken', token)
    this.token = token
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload) 
      return JSON.parse(payload)
    } else {
      return null
    }
  }


  public isLoggedIN(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(url.myurl + `user/add`, user)
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(url.myurl + `user/login`, user)
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token, data["u_id"])
        }
        return data;
      })
    )
    return request;
  }

  public forgetPassword(user: TokenPayload): Observable<any> {
    return this.http.post(url.myurl + `user/forgetpassword`, user)
  }

  public changePassword(user: TokenPayload): Observable<any> {
    return this.http.patch(url.myurl + `user/resetpassword`, user)
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('userToken')
    window.localStorage.removeItem('user_id')
    window.localStorage.removeItem('u_name')
    window.localStorage.removeItem('g_id')
    this.route.navigate(['/'])
  }

  public profile(): Observable<any> {

    return this.http.get(url.myurl + `user/profile`)
  }

  public updateProfile(data): Observable<any> {

    return this.http.patch(url.myurl + `user/update`, data)
  }
}
