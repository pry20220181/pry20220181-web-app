import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoseReminder } from '../models/Dose-Reminder-Model';

@Injectable({
    providedIn: 'root'
})

export class Reminders {

    private API = 'http://localhost:5114';

    constructor(private http: HttpClient) { }

    getDoses(parentid: number, date: string): Observable<DoseReminder> {
        return this.http.get<DoseReminder>(this.API + "/reminders/doses?parentId=" + parentid + "&sendDate=" + date);
    }

}
