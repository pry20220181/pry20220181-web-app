import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth-service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardD implements CanActivate {

  constructor(private service: AuthService, private route: Router) { }

  canActivate() {
    if (this.service.haveAccessD()) {
      console.log("canActivateRole Si doctor"); 
      return true
    }
    else {
      console.log("canActivateRole No doctor")
      this.route.navigate(['/', 'login'])
      return false;
    }
  }

}
