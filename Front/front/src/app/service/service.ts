import { SelectorListContext } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class Service {

    dniChild:number=0
    idChild:number=0
    idModal:number=0
    rol:string=''

    constructor(){}

    getDNIChild(){
        return this.dniChild
    }

    setDNIChild(dni:number){
        this.dniChild=dni
    }

    getIdChild(){
        return this.idChild
    }

    setIdChild(id:number){
        this.idChild=id
    }

    setIdRegister(id:number){
        this.idModal=id
    }
    
    getIdRegister(){
        return this.idModal
    }

    getRol(){
        return this.rol
    }

    setRol(rol:string){
        this.rol=rol
    }


}