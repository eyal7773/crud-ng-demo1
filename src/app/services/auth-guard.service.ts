import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from './auth-http.service';

// ref for authGuard: https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {

  constructor(public _authService: AuthService,
              public _router:Router) {

               }

  canActivate(): boolean  {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate(['login']);
      return false;
    } 
    return true;
  }
}


