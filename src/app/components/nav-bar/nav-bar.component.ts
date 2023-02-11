import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  public user! : any

  constructor(private _authService : AuthService){}

  ngOnInit(): void {
    this._authService.user.subscribe(data => {
        this.user = data
    })
  }

  logout() : void {
    this._authService.logout();

  }
}
