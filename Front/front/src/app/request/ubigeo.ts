import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ubioModel } from '../models/ubigeo-model';

@Injectable({
  providedIn: 'root'
})

export class Ubigeo {

  private API = 'http://localhost:5114';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ubioModel>{
    return this.http.get<ubioModel>(this.API + "/ubigeos");
  }

}
