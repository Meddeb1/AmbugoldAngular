import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request : HttpRequest<unknown>, next : HttpHandler):Observable<HttpEvent<unknown>>{
    let token: string | null = localStorage.getItem('token');
    if(token){
      if(token != ''){
        let cloneRequest =request.clone({setHeaders : {'Authorization' : 'Bearer' + token}})
        return next.handle(cloneRequest);
      }
    }
    return next.handle(request);
  }
}
