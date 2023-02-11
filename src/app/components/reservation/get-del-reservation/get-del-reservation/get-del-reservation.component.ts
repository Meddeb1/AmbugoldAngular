import { Reservation } from './../../../../models/reser.model';
import { ReservationService } from './../../../../services/reservation/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-del-reservation',
  templateUrl: './get-del-reservation.component.html',
  styleUrls: ['./get-del-reservation.component.scss']
})
export class GetDelReservationComponent implements OnInit {

  public reservations : any [] = [];

  constructor(private _resService : ReservationService){
    this._resService.GetAll().subscribe({
      next:(data:any)=>{
        this.reservations = data;
        console.log(data);
      }
     })
  }

  ngOnInit(): void {

  }


  delete(id:number){
    this._resService.Delete(id).subscribe({
      next:()=>{
        this._resService.GetAll().subscribe({
          next:(data)=>{
            this.reservations=data;
            console.log(data);

          }
        })
      }
    })
  }
}
