import { Reservation } from './../../models/reser.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private _httpClient : HttpClient) { }

  GetAll(): Observable<any[]>{
    return this._httpClient.get<any[]>(`${environment.apiUrl}/Reservation/GetAll`);

  }

  GetById(id:number):Observable<Reservation>{
    return this._httpClient.get<Reservation>(`${environment.apiUrl}/Reservation/`+id);
  }

  Insert(res : Reservation){
    return this._httpClient.post(`${environment.apiUrl}/Reservation/Insert`,res);
  }

  Update(rese : Reservation , id : number){
    console.log('id',id)
    return this._httpClient.put(`${environment.apiUrl}/Reservation/Update`+id,rese);

  }

  Delete(id:number){
    return this._httpClient.delete(`${environment.apiUrl}/Reservation/Delete`+id)
  }
}
