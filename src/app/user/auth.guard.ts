import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonAuthService } from './common-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth:CommonAuthService,private _router:Router){}

  canActivate()  {
    if(this._auth.isLoggedIn()){
      return true
    }
    this._router.navigateByUrl('user/sign-in')
    return false
  }
  
}
