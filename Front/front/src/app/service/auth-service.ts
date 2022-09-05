import { Injectable } from "@angular/core";
import { AppComponent } from "../app.component";
import { Service } from "./service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private _service: Service) { }

    logOut() {
        return localStorage.removeItem('token')
    }

    isLoggedIn() {
        return localStorage.getItem('token') != null;
    }

    getToken() {
        return localStorage.getItem('token') || '';
    }

    haveAccessD() {
        var loggintoken = localStorage.getItem('token') || '';
        var _extractedtoken = loggintoken.split('.')[1];
        var _astobdata = atob(_extractedtoken);
        //console.log("_astobdata",_astobdata)
        var _finaldata = _astobdata.split('"')[15]
        console.log("_finaldata doctor",_finaldata)
        if (_finaldata === 'HealthPersonnel') {
        this._service.setRol(_finaldata)
            return true;
        }
        //alert('you havint acces')
        console.log(_finaldata)
        return false;
    }

    haveAccessP() {
        var loggintoken = localStorage.getItem('token') || '';
        var _extractedtoken = loggintoken.split('.')[1];
        var _astobdata = atob(_extractedtoken);
        //console.log("_astobdata",_astobdata)
        var _finaldata = _astobdata.split('"')[15]
        console.log("_finaldata patient",_finaldata)
        if (_finaldata === 'Parent') {
        this._service.setRol(_finaldata)
            return true;
        }
        //alert('you havint acces')
        console.log(_finaldata)
        return false;
    }


}