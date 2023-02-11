import { User } from './../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endPointUrl=environment.apiUrl + '/User/';

  constructor(private _httpClient: HttpClient){}

  GetAll(): Observable<User[]>{
    return this._httpClient.get<User[]>(this.endPointUrl+'GetAll');
  }

  GetById(id:number): Observable<User>{
    return this._httpClient.get<User>(this.endPointUrl+id);
  }
}
