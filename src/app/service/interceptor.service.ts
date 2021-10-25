import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url != "http://localhost:8080/auth/signup"){
      const accessToken = localStorage.getItem('token');
       if (accessToken) {
        request = request.clone({
          setHeaders: {
            Authorization: accessToken
          }
        })
      }
      //  else {
      //   console.log('loi token')
      // }
    }
      return next.handle(request);
    }
}

