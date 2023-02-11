import { MotifTransportService } from './../../../services/motifTransport/motif-transport.service';
import { Component, OnInit } from '@angular/core';
import { motifObservableService } from 'src/app/services/observables/motifObservable.service';

@Component({
  selector: 'app-get-del-motif-transport',
  templateUrl: './get-del-motif-transport.component.html',
  styleUrls: ['./get-del-motif-transport.component.scss']
})
export class GetDelMotifTransportComponent implements OnInit{

  motifs : any[]=[];
  constructor(private _motObs:motifObservableService,private _motifService : MotifTransportService){}

  ngOnInit(): void {
    this._motObs.$motifSubject.subscribe({
      next:(data)=>{
        this.motifs=data;
        console.log(data);

      }
    })
  }

  delete(id:number){
    this._motifService.Delete(id).subscribe({
      next:()=>{
        this._motifService.GetAll().subscribe({
          next:(data)=>{
            this.motifs=data;
            console.log(data);

          }
        })
      }
    })
  }

}
