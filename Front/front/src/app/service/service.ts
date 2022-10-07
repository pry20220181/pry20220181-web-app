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
    idParent=0
    vacId=0
    invetoryId=0

    constructor(){}

    getInventoryId(){
        return this.invetoryId
    }

    setInventoryId(dni:number){
        this.invetoryId=dni
    }

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

    getIdP(){
        return this.idParent
    }

    setIdP(idParent:number){
        this.idParent=idParent
    }

    getvacId(){
        return this.vacId
    }

    setvacId(vacId:number){
        this.vacId=vacId
    }




}