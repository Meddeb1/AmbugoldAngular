import { environment } from './../../../environments/environment';
import { MotifTransport } from './../../models/motifTransportform.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MotifTransportService {


  constructor(private _httpClient : HttpClient) { }

  GetAll():Observable<MotifTransport[]>{
    return this._httpClient.get<MotifTransport[]>(`${environment.apiUrl}/MotifTransport/GetAll`)
  }

  GetById():Observable<MotifTransport>{
    return this._httpClient.get<MotifTransport>(`${environment.apiUrl}/MotifTransport/GetById{id}`);
  }

  Insert(cat : MotifTransport){
    return this._httpClient.post(`${environment.apiUrl}/MotifTransport`,cat);
  }

  Update(cat : MotifTransport , id : number){
    return this._httpClient.put(`${environment.apiUrl}/MotifTransport{id}`,cat);

  }

  Delete(id:number){
    return this._httpClient.delete(`${environment.apiUrl}/MotifTransport/Delete{id}`)
  }

}
