import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorieform.model';
import { Emploi } from 'src/app/models/emploi.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatserviceService {
  constructor(private _httpClient : HttpClient) { }

  GetAll(): Observable<Categorie[]>{
    return this._httpClient.get<Categorie[]>(`${environment.apiUrl}/Categorie/GetAll`);

  }

  GetById():Observable<Categorie>{
    return this._httpClient.get<Categorie>(`${environment.apiUrl}/Categorie/GetById{id}`);
  }

  Insert(cat : Categorie){
    return this._httpClient.post(`${environment.apiUrl}/Insert`,cat);
  }

  Update(cat : Categorie , id : number){
    return this._httpClient.put(`${environment.apiUrl}/Update{id}`,cat);

  }

  Delete(id:number){
    return this._httpClient.delete(`${environment.apiUrl}/Update{id}`)
  }
}
