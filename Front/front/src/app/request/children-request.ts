import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Children } from '../models/Children';

@Injectable({
    providedIn: 'root'
  })

  export class ChildrenRquest{
    
  private API = 'https://localhost:5001/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Children>{
    return this.http.get<Children>(this.API + "children");
  }
  }

