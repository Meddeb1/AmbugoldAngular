import { Token } from './../../models/token-models';
import { RegisterForm } from 'src/app/models/registerForm.model';
import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject,map,Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { LoginForm } from 'src/app/models/loginForm.model';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user : BehaviorSubject<any> = new BehaviorSubject<any>({} as any);


  constructor(private _httpClient : HttpClient, private _router: Router){}


  login(userLogin : LoginForm) : void {
    this._httpClient.post<any>(`${environment.apiUrl}/auth`,userLogin).subscribe({
      next :(res) =>{
        console.log(res)
        localStorage.setItem('token',res.token);
        localStorage.setItem('firstname', res.firstName)
        localStorage.setItem('name', res.lastName)
        localStorage.setItem('id', res.id)
        this.user.next(res)

        this._router.navigateByUrl('/home');
      }
    })
  }

  logout() : void {
    //localStorage.removeItem('token');
    localStorage.clear()
    this.user.next({}as any)
    this._router.navigateByUrl('/home');


  }

  register(registerForm : RegisterForm) : void{
    this._httpClient.post<any>(`${environment.apiUrl}/User/Insert`,registerForm).subscribe({
      next:(res) => {
        localStorage.setItem('token',res.token);
        localStorage.setItem('firstname', res.firstName)
        localStorage.setItem('name', res.lastName)
        localStorage.setItem('id', res.id)
        this.user.next(res)
        this._router.navigateByUrl('/home');
      }
    })
  }



  // [x: string]: any;
  // private _currentUserSubject: BehaviorSubject<User>;

  // public get currentUserValue():User{
  //   return this._currentUserSubject.value
  // }

  // constructor(private _client : HttpClient, private _route : Router) {
  //   this._currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));

  //   // private _isConnected$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //   // isConnected$ : Observable<boolean> = this._isConnected$.asObservable();
  //  }

  //  Register(user:RegisterForm) : Observable<any>{
  //   return this._client.post(`${environment.apiUrl}/User/Insert`,user);
  //  }

  //  Login(userLogin : LoginForm) : Observable<User>{
  //   return this._client.post<any>(`${environment.apiUrl}/Auth`,userLogin)
  //   .pipe(map(user =>{
  //     sessionStorage.setItem('currentUser',JSON.stringify(user));
  //     this._currentUserSubject.next(user);
  //     return user;
  //   }))
  //  }
  //  logout(){
  //   sessionStorage.removeItem('currentUser');
  //   this._currentUserSubject.next(null);
  //  }

  //  isConnected(): boolean {
  //   return(this.currentUserValue != null);
    }





