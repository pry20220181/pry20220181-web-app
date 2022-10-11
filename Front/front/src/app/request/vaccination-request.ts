import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { VaccinationAd } from '../models/Vaccination-Ad-model';
import { VaccinationRe } from '../models/Vaccination-Re-model';
import { tap } from 'rxjs/operators';
import { Vaccination } from '../models/vaccination-model';
import { VaccInve } from '../models/VaccInve-model';
import { VacSchems } from '../models/vaccination-schemes-model';
import { Vaccine } from '../models/Vaccine-model'
import { VaccCamp } from '../models/vacc-camp-model';

@Injectable({
  providedIn: 'root'
})

export class VaccinationRquest {

  private API = 'http://localhost:5000';
  //private API = 'http://localhost:5000';
  private _refresh$ = new Subject<void>()

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$
  }

  getVaRe(id: number): Observable<VaccinationRe> {
    return this.http.get<VaccinationRe>(this.API + "/vaccination/remaining-doses?childId=" + id);
  }

  getVaAd(id: number): Observable<VaccinationAd> {
    return this.http.get<VaccinationAd>(this.API + '/vaccination/administered-doses?childId=' + id)
  }

  postVa(data: any) {
    return this.http.post(this.API + '/vaccination/administered-doses', data)
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      )
  }
  getAll(): Observable<Vaccination> {
    return this.http.get<Vaccination>(this.API + "/vaccines?fields=all");
  }

  getVaccineById(id:number): Observable<Vaccine> {
    return this.http.get<Vaccine>(this.API + "/vaccines/" + id);
  }

  getinfoChildById(id:number): Observable<VaccinationAd> {
    return this.http.get<VaccinationAd>(this.API + '/children/'+ id + '/vaccination-card')
  }

  postVacciAppo(data:any){
    return this.http.post(this.API + '/vaccination/appointments', data);
  }

  getVaccInve(heldId:number, vaccId:number):Observable<VaccInve> {
    return this.http.get<VaccInve>(this.API + '/vaccines/inventory?healthCenterId='+heldId+'&vaccineId='+vaccId)

  }

  postVaccInv(data:any){
    return this.http.post(this.API + '/vaccines/inventory', data);
  }

  getVaccSchems():Observable<VacSchems> {
    return this.http.get<VacSchems>('http://localhost:5000' + '/vaccination/schemes')

  }

  postVacc(data:any) {
    return this.http.post('http://localhost:5000' + '/vaccines', data)

  }

  getVaccCamp():Observable<VaccCamp>{ //Esta harcodeado, ya que deberia de retornar todas las camñanas y no solo 1
    return this.http.get<VaccCamp>(this.API + '/vaccination/campaigns?healthCenterId=1&sinceDate=None')
  }

}

