import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Emploi } from 'src/app/models/emploi.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private _httpClient : HttpClient) { }

  GetAll(): Observable<Emploi[]>{
    return this._httpClient.get<Emploi[]>(`${environment.apiUrl}/Emploi/GetAll`);

  }

  GetById(id:number):Observable<Emploi>{
    return this._httpClient.get<Emploi>(`${environment.apiUrl}/Emploi/`+id);
  }

  Insert(emp : Emploi){
    return this._httpClient.post(`${environment.apiUrl}/Emploi/Insert`,emp);
  }

  Update(emp : Emploi , id : number){
    return this._httpClient.put(`${environment.apiUrl}/Emploi/Update`+id,emp);

  }

  Delete(id:number){
    return this._httpClient.delete(`${environment.apiUrl}/Emploi/delete`+id)
  }


}
