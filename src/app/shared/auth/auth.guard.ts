import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _tokenService: TokenService,
  ){}
  canActivate(){
    let identity = this._tokenService.getActiveToken();

    if(identity){
      return true;
    }else{
      this._router.navigate(['/']);
      return false;
    }
  }
  
}
