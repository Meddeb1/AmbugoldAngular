import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './../../models/loginForm.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm1 : FormGroup;

  constructor(private _fb : FormBuilder, private _authService : AuthService,
               private _router : Router) {
    this.loginForm1 = this._fb.group({
      Email : [null, [Validators.required]],
      Password : [null, [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  Login() : void {
    if(this.loginForm1.valid){
      let loginValue : LoginForm = this.loginForm1.value;
      this._authService.login(loginValue);
      console.log(loginValue);


    }
    else {
      this.loginForm1.markAllAsTouched();
    }
  }


  // public LoginForm : FormGroup;
  // public user! : LoginForm ;

  // constructor(private _route : Router, private _authService: AuthService, private _formBuilder:FormBuilder){}

  // ngOnInit(): void {
  //   this.LoginForm = this._formBuilder.group({
  //     Email :[null,[Validators.required,Validators.email]],
  //     Password : [null,[Validators.required]]
  //   })
  // }

  // login(): void {
  //   this.user = new LoginForm;
  //   this.user.Email=this.LoginForm.value["Email"];
  //   this.user.Password=this.LoginForm.value["Password"];

  //   let currentUser : User;
  //   this._authService.Login(this.LoginForm.value).subscribe({
  //     next:(user) =>{
  //       currentUser =user;
  //       if(currentUser != null){
  //         this._route.navigate(["home"]);
  //         console.log(user);

  //       }
  //     }
  //   })
  // }
}
