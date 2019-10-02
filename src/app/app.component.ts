import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { TokenService } from "./shared/services/token/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = false;
  constructor(
    private _router: Router,
    private _tokenService: TokenService
  ) {
    _router.events.subscribe((url:any) => {      
      this.hide = (this._router.url === '/')? true : false;
    });
  }

  ngOnInit(){
   
  }

  singOut(){
    this._tokenService.logOut();
    this._router.navigateByUrl("/");
  }

  title = 'user-app';
}
