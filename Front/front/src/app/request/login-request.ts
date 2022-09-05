import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Children } from '../models/Children-model';
import { HealthPersonnel } from '../models/HealthPersonnel-model';

@Injectable({
  providedIn: 'root'
})

export class LoginRequest {

  private API = 'https://localhost:5001';

  constructor(private http: HttpClient) { }


  proceedLogin(data: any) {
    return this.http.post(this.API + '/security/authenticate', data);
  }
  


}
