import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterForm } from 'src/app/models/registerForm.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {

  public registerForm: FormGroup;


  constructor(private _route :Router,private _authService : AuthService,private _formBuilder : FormBuilder){}

  ngOnInit(): void {
    // this.registerForm =this._formBuilder.group({
    //   FirstName : [null,[Validators.required]],
    //   LastName: [null,[Validators.required]],
    //   BirthDate : [null,[Validators.required]],
    //   Email :[null,[Validators.email,Validators.required]],
    //   Adresse:[null,[Validators.required]],
    //   Sexe :[null,[Validators.required]],
    //   Phone:[null,[Validators.required]],
    //   Password :[null,[Validators.required]],
    //   ConfirmPassword : [null,[Validators.required]]},

    // {Validators : [this.passwordValidator]})
    this.registerForm=this._formBuilder.group({
      FirstName:[null,[Validators.required]],
      LastName:[null,[Validators.required]],
      Adresse:[null,[Validators.required]],
      BirthDate:[null,[Validators.required]],
      Email:[null,[Validators.required]],
      Phone:[null,[Validators.required]],
      Sexe:[null,[Validators.required]],
      Password:[null,[Validators.required]],
      ConfirmPassword:[null,[Validators.required]],
      
    })

  }

  Register(): void {
   if(this.registerForm.valid){
    console.log(this.registerForm.value);
    let registerValue : RegisterForm = this.registerForm.value;
    this._authService.register(registerValue);
   }
   else{
    this.registerForm.markAllAsTouched();
   }
  }

  passwordValidator(group : FormGroup) {
    //On vérifie en premier si les deux input contiennent une valeur
    if(group.get('Password')?.value != "" && group.get('ConfirmPassword')?.value != ""){
      //On vérifie si les deux mdp sont différents pour renvoyer une erreur, sinon on renvoie null
      if(group.get('Password')?.value != group.get('ConfirmPassword')?.value){
        return { notsame : true }
      }
      return null;
    }
    return null;
  }


}
