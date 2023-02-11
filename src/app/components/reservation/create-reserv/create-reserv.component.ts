import { Token } from './../../../models/token-models';
import { TokenInterceptorService } from './../../../services/TokenInterceptor/token.interceptor.service';
import { User } from './../../../models/user.model';
import { UsersService } from './../../../services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MotifTransportService } from './../../../services/motifTransport/motif-transport.service';
import { motifObservableService } from './../../../services/observables/motifObservable.service';
import { CateObservableService } from './../../../services/observables/cate-observable.service';
import { CatserviceService } from './../../../services/categorie/catservice.service';
import { Reservation } from './../../../models/reser.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from './../../../services/reservation/reservation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-reserv',
  templateUrl: './create-reserv.component.html',
  styleUrls: ['./create-reserv.component.scss']
})
export class CreateReservComponent implements OnInit{

  reserForm : FormGroup;
  Id:number;
  reservations: Reservation

  user! : any

  userName: string = JSON.stringify(localStorage.getItem('firstname')) + " " + JSON.stringify(localStorage.getItem('name'))


   categories: any [] = [];
  // get categories():any[] {return this._categories}
  users:User;

  motifs:any[]=[];
  // get motifsT():any[]{return this._motifs}



  constructor(
      private _token:TokenInterceptorService,
      private _activateRoute:ActivatedRoute,
      private _useService:UsersService,
      private _authService:AuthService,
      private _motObs : motifObservableService,
      private _motifService : MotifTransportService,
      private _catObser:CateObservableService,
      private _fb : FormBuilder,
      private _resService : ReservationService,
      private _router : Router,
      private _catService : CatserviceService){

    this.reserForm = this._fb.group({
      Date:[null,[Validators.required]],
      Nom:[null,[Validators.required]],
      Prenom:[null,[Validators.required]],
      AdressDepart:[null,[Validators.required]],
      AdressArrivee:[null,[Validators.required]],
      Duree:[null,[Validators.required]],
      IdCategorie:[null,[Validators.required]],
      IdMotif:[null,[Validators.required]],

    })


  }
  ngOnInit(): void {

    this._authService.user.subscribe(data => {
      this.user = data
      console.log(this.user)
    })
    // this._catService.GetAll().subscribe({
    //   next:(data)=>{
    //     this._catObser.$catSubject.next(data);

    //   }
    //  })
    //  this._catObser.$catSubject.subscribe({
    //   next:(data:any)=>{
    //     this._categories=data;
    //     console.log(data);

    //   }
    // })

    this._catService.GetAll().subscribe((data:any)=>{
      this.categories=data;
    })

    this._motifService.GetAll().subscribe((data:any)=>{
      this.motifs=data;


    })

    // this._useService.GetById(JSON.parse(localStorage.getItem('id'))).subscribe({
    //   next:(data)=>{
    //     this._token.intercept.name
    //     console.log(data);

    //   }
    // })




    // this._useService.GetById(1).subscribe((data:any)=>{
    //   this.users=data;


    // })


  }

  // Motif(){
  //   this._motifService.GetAll().subscribe({
  //     next:(data)=>{
  //       this._motObs.$motifSubject.next(data);

  //     }
  //    })
  //    this._motObs.$motifSubject.subscribe({
  //     next:(data:any)=>{
  //       this._categories=data;
  //       console.log(data);

  //     }
  //   })
  // }

  insert(){
    if(this.reserForm.valid){
      console.log(this.reserForm.value);

      let resForm : Reservation = this.reserForm.value;
      this._resService.Insert(resForm).subscribe({
        next:(data)=>{

          this._router.navigateByUrl('/reservation');
          console.log(data);

        }
      })
    }

    else{
      this.reserForm.markAllAsTouched();
    }
  }

}
