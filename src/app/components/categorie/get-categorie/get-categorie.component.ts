import { CateObservableService } from './../../../services/observables/cate-observable.service';
import { CatserviceService } from './../../../services/categorie/catservice.service';
import { Categorie } from './../../../models/categorieform.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-categorie',
  templateUrl: './get-categorie.component.html',
  styleUrls: ['./get-categorie.component.scss']
})
export class GetCategorieComponent implements OnInit {

  categoriesss : any [] = [];

  constructor(private _catObs : CateObservableService ,private _catService : CatserviceService){}

  ngOnInit(): void {
    this._catObs.$catSubject.subscribe({
          next:(data)=>{
            this.categoriesss = data;
            console.log(data);

          }
         })
  }
  // getAll(){
  //   this._catService.GetAll().subscribe({
  //     next:(data)=>{
  //       this.categoriesss = data;
  //       console.log(data);

  //     }
  //   })
  // }

  delete(id:number){
    this._catService.Delete(id).subscribe({
      next:()=>{
        this._catService.GetAll().subscribe({
          next:(data)=>{
            this.categoriesss=data;
            console.log(data);

          }
        })
      }
    })
  }

}
