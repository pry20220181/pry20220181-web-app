import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginRequest {

  private API = 'https://localhost:5001';
  //private API = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  proceedLogin(data: any) {
    return this.http.post(this.API + '/security/authenticate', data);
  }

}
