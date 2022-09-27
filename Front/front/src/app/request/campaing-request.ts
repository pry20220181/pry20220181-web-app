import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CampaingRequest {

  private API = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post(this.API + '/vaccination/campaigns', data);
  }

}
