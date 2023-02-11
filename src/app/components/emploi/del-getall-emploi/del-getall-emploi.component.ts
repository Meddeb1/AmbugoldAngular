import { EmploiService } from 'src/app/services/Emploi/emploi.service';
import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/app/models/emploi.model';

@Component({
  selector: 'app-del-getall-emploi',
  templateUrl: './del-getall-emploi.component.html',
  styleUrls: ['./del-getall-emploi.component.scss']
})
export class DelGetallEmploiComponent implements OnInit{

  emplois : any[] = [];

  constructor(private _emploiService: EmploiService){}

  ngOnInit(): void {
    this._emploiService.GetAll().subscribe({
      next:(res) =>{
        this.emplois=res;
        console.log(res);
      }
    })
  }



  delete(id:number){
    this._emploiService.Delete(id).subscribe({
      next:()=>{
        this._emploiService.GetAll().subscribe({
          next:(data)=>{
            this.emplois=data;
            console.log(data);

          }
        })
      }
    })
  }

}
