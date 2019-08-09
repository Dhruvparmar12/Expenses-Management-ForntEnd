import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,

} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';



@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorsService implements HttpInterceptor {

  constructor(private auth:AuthenticationService) { }
    

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }

}
