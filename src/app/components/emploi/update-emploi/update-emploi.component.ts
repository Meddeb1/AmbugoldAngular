import { EmploiService } from './../../../services/Emploi/emploi.service';
import { Emploi } from './../../../models/emploi.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-emploi',
  templateUrl: './update-emploi.component.html',
  styleUrls: ['./update-emploi.component.scss']
})
export class UpdateEmploiComponent implements OnInit{

  emploiForm: FormGroup;
  emploiId : number ;
  emploi : Emploi;

  constructor(private _fb: FormBuilder, private _activeRoute: ActivatedRoute, private _emploiService : EmploiService, private _router :Router){
    this.emploiForm=this._fb.group({
      Nom:[null,[Validators.required]],
      Designation:[null,[Validators.required]],
      DateDebut:[null,[Validators.required]],
      DateFin:[null,[Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  getById(id:number){
      //recuperation de l'ID
      this.emploiId=this._activeRoute.snapshot.params['id'];
      this._emploiService.GetById(this.emploiId).subscribe({
        next:(res) =>{
          this.emploi=res;
          console.log(res);
          this.emploiForm.patchValue({
            Nom:this.emploi.Nom,
            Designation:this.emploi.Designation,
            DateDebut:this.emploi.DateDebut,
            DateFin:this.emploi.DateFin,


          })
        }
      })
  }

  update(){
    if(this.emploiForm.valid){
      let emUpdate : Emploi = this.emploiForm.value;
      this._emploiService.Update(emUpdate,this.emploiId).subscribe({
        next:(res) => {
          this._router.navigateByUrl('/emploi/update');
        }
      })
    }
    else{
      this.emploiForm.markAllAsTouched();
    }
  }

}
