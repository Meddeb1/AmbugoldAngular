import { Categorie } from './../../models/categorieform.model';
import { CateObservableService } from './../../services/observables/cate-observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _categories : any []=[];

  constructor(private _catObs : CateObservableService){}

  ngOnInit(): void {
    // console.log(this._catObs.$catSubject);

    this._catObs.$catSubject.subscribe({
      next:(data:any)=>{
        this._categories=data;
        console.log(data);

      },
      error : (error)=>{
        console.log(error);

      }
    })
  }
}
