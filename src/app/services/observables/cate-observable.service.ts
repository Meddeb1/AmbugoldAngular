import { CatserviceService } from './../categorie/catservice.service';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CateObservableService implements OnInit{

  public  $catSubject : Subject <any> = new Subject();
  constructor(private _catService : CatserviceService) {

  }

  ngOnInit(): void {
   

  }
}
