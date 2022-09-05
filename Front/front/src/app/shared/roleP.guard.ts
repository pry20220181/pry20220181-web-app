import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth-service";

@Injectable({
    providedIn: 'root'
})
export class RoleGuardP implements CanActivate {

    constructor(private authservice: AuthService, private route: Router) { }

    canActivate() {
        if (this.authservice.haveAccessP()) {
            console.log("canActivateRole Si parent"); 
            return true
        }
        else {
            console.log("canActivateRole No parent")
            this.route.navigate(['/', 'login'])
            return false;
        }
    }
}
