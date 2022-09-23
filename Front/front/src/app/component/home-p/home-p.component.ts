import { Component, OnInit } from '@angular/core';
import { Reminders } from 'src/app/request/remiders-request';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrls: ['./home-p.component.css']
})
export class HomePComponent implements OnInit {

  // List=[{via:'asd'},{via:'aq'}]
  List:any[]=[]

  dateTime = new Date()

  constructor(private reminder: Reminders,
    private _servie:Service) { }

  ngOnInit(): void {
    console.log( this.dateTime.getFullYear()+"-"+this.dateTime.getMonth()+"-"+this.dateTime.getDate())
    this.getDoses()
  }

  getDoses() {
    this.reminder.getDoses(this._servie.getIdP(), this.dateTime.getFullYear()+"-"+this.dateTime.getMonth()+"-"+this.dateTime.getDate()).subscribe((result: any) => {
      console.log(result.value.dosesReminders)
      let doseReminders = result.value.dosesReminders
      for (let i = 0; i < doseReminders.length; i++) {
        const element = doseReminders[i];
        this.List.push({
          index: i,
          reminderId: element.reminderId,
          childName: element.child.name,
          doseNumber: element.dose.doseNumber,
          vaccineName: element.dose.vaccineName
        })
      }
      
      /*
      
      */
    })
  }

}
