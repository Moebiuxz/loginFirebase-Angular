import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);
    if (this.auth.isLoggedIn()) {
      console.error('Bloqueado por el guard!');
      return false;
    } else {
      return true;
    }
  }
}
