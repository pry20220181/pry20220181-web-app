import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Children } from '../models/Children-model';

@Injectable({
    providedIn: 'root'
  })

  export class ChildrenRquest{
    
    private API = 'http://localhost:5114';
    //private API = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Children>{
    return this.http.get<Children>(this.API + "/children");
  }
  getByDNI(id:number): Observable<Children>{
    return this.http.get<Children>(this.API + "/children?dni=" + id);
  }

  getbyParent(): Observable<Children>{
    return this.http.get<Children>(this.API+"/parents/children")
  }

  }

