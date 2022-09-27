import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthPersonnel } from '../models/HealthPersonnel-model';

@Injectable({
    providedIn: 'root'
  })

  export class HealthCenterRequest{
    
  private API = 'http://localhost:5114';
  //private API = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<HealthPersonnel>{
    return this.http.get<HealthPersonnel>(this.API + "/health-centers");
  }

  }
