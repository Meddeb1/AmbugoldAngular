// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { environment } from "src/environments/environment";
// import { AuthService } from "../services/auth/auth.service";




// @Injectable()

// export class JWTInterceptor implements HttpInterceptor {
//   constructor(private _authService : AuthService){}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


//     const currentUser = this._authService.currentUserValue;
//     const isLoggedIn = currentUser && currentUser.Token;
//     const isApiUrl = request.url.startsWith(environment.apiUrl);

//     if(isLoggedIn && isApiUrl){
//       request = request.clone({
//         setHeaders:{
//           Authorization: `Bearer ${currentUser.Token}`
//         }
//       });
//     }
//     return next.handle(request);
//   }
// }

