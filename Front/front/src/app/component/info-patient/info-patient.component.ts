import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit {

  constructor(private appComp:AppComponent) { }

  ngOnInit(): void {
  }

  toggleleModal(){
    this.appComp.changemodal(true)
    console.log("entro")
  }
}
