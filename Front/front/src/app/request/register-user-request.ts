import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Register {

  private API = 'https://localhost:5001';

  constructor(private http: HttpClient) { }

  parentRequest(data: any) {
    return this.http.post(this.API + '/security/parent', data);
  }

  personnelRequest(data: any) {
    return this.http.post(this.API + '/security/health-personnel', data);
  }

}