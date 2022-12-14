import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoseReminder } from '../models/Dose-Reminder-Model';
import { RemiAppo } from '../models/remider-Appointment-model';

@Injectable({
    providedIn: 'root'
})

export class Reminders {

    private API = 'http://localhost:5000';

    constructor(private http: HttpClient) { }

    getDoses(parentid: number, date: string): Observable<DoseReminder> {
        return this.http.get<DoseReminder>(this.API + "/reminders/doses?parentId=" + parentid + "&sendDate=None"/* + date*/);
    }

    getAppointments(date: string): Observable<RemiAppo>{
    return this.http.get<RemiAppo>(this.API + "/reminders/vaccination-appointments?sendDate=None"/*+date*/);
    }

    getDoses2(): Observable<DoseReminder> {
        return this.http.get<DoseReminder>(this.API + "/reminders/doses-by-parent");
    }
}

