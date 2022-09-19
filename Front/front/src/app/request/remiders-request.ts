import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ubioModel } from '../models/ubigeo-model';

@Injectable({
    providedIn: 'root'
})

export class Reminders {

    private API = 'https://localhost:5001';

    constructor(private http: HttpClient) { }

    getDoses(parentid: number, date: string): Observable<ubioModel> {
        return this.http.get<ubioModel>(this.API + "/reminders/doses?parentId=" + parentid + "&sendDate=" + date);
    }

}
