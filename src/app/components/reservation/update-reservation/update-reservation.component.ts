import { CatserviceService } from './../../../services/categorie/catservice.service';
import { MotifTransportService } from './../../../services/motifTransport/motif-transport.service';
import { Categorie } from './../../../models/categorieform.model';
import { Reservation } from './../../../models/reser.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from './../../../services/reservation/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { MotifTransport } from 'src/app/models/motifTransportform.model';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit{

  resForm : FormGroup;
  resId : number ;
  reservation : Reservation;
  categories : Categorie[]=[];
  motifs:MotifTransport[]=[];

  constructor(private _motifs :MotifTransportService,private _categ : CatserviceService,private _fb : FormBuilder , private _resService : ReservationService, private _router : Router, private _activateRoute : ActivatedRoute){
    this.resForm = this._fb.group({
      //Date:[null,[Validators.required]],
      Nom:[null,[Validators.required]],
      Prenom:[null,[Validators.required]],
      AdressDepart:[null,[Validators.required]],
      AdressArrivee:[null,[Validators.required]],
      Duree:[null,[Validators.required]],
      IdCategorie:[null,[Validators.required]],
      IdMotif:[null,[Validators.required]]
    })

    this.resId = parseInt( this._activateRoute.snapshot.params['id']!)
  }

  ngOnInit(): void {
    this._categ.GetAll().subscribe((data:any)=>{
      this.categories=data;
      console.log(data)
      console.log(this.categories)
    })

    this._motifs.GetAll().subscribe((data:any)=>{
      this.motifs=data;
      console.log(data)
      console.log(this.motifs)


    })





  }

  getById(id : number){
       // recuperation de l'id

       this._resService.GetById(this.resId).subscribe({
         next:(data) =>{
           this.reservation = data;
           this.resForm.patchValue({
             ////date:this.reservation.Date,
             adressDepart : this.reservation.AdressDepart,
             adressArrivee : this.reservation.AdressArrivee,
             duree : this.reservation.Duree,
             categorieName:this.reservation.IdCategorie,
             motoifTransportName: this.reservation.IdMotif
           })
         }
       })
  }

  updateReser(){
    console.log('this.resForm.valid',this.resForm.valid)
    // console.log('this.resForm',JSON.stringify(this.resForm))
    if(this.resForm.valid){
      let resUpdate : Reservation = this.resForm.value;
      console.log('resUpdate',JSON.stringify(resUpdate))
      //transfomrer les json en chaine de caractere

      //snapsht:prend l'etat actuel,
      console.log('this.resId',JSON.stringify(this.resId))
      this._resService.Update(resUpdate,this.resId).subscribe({
         next:(data) => {
          this._router.navigateByUrl('/reservation');
          console.log(data);

         }
      })
    }
    else{
      this.resForm.markAllAsTouched();
    }
  }





}
