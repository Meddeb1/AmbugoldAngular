import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emploi } from 'src/app/models/emploi.model';
import { EmploiService } from 'src/app/services/Emploi/emploi.service';

@Component({
  selector: 'app-insert-emploi',
  templateUrl: './insert-emploi.component.html',
  styleUrls: ['./insert-emploi.component.scss']
})
export class InsertEmploiComponent {
  emploiForm : FormGroup;

  constructor(private _fb : FormBuilder, private _emploiService : EmploiService, private _router : Router){
    this.emploiForm = this._fb.group({
      Nom:[null,[Validators.required]],
      Designation:[null,[Validators.required]],
      DateDebut:[null,[Validators.required]],
      DateFin:[null,[Validators.required]]
    })
  }

  insert(){
    if(this.emploiForm.valid){
      let emForm : Emploi = this.emploiForm.value;
      this._emploiService.Insert(emForm).subscribe({
        next : () => {
          this._router.navigateByUrl("/emploi");
        }
      })
    }
    else{
      this.emploiForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {

  }

}
