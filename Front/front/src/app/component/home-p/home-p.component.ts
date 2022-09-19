import { Component, OnInit } from '@angular/core';
import { Reminders } from 'src/app/request/remiders-request';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrls: ['./home-p.component.css']
})
export class HomePComponent implements OnInit {

  List=[{via:'asd'},{via:'aq'}]

  dateTime = new Date()

  constructor(private reminder: Reminders,
    private _servie:Service) { }

  ngOnInit(): void {
    console.log( this.dateTime.getFullYear()+"-"+this.dateTime.getMonth()+"-"+this.dateTime.getDate())
    this.getDoses()
  }

  getDoses() {
    this.reminder.getDoses(this._servie.getIdP(), this.dateTime.getFullYear()+"-"+this.dateTime.getMonth()+"-"+this.dateTime.getDate()).subscribe(reult => {
      console.log(reult)
    })
  }

}
