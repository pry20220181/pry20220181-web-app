import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-campein-vac',
  templateUrl: './campein-vac.component.html',
  styleUrls: ['./campein-vac.component.css']
})
export class CampeinVacComponent implements OnInit {

  constructor(private appComp: AppComponent,) { }

  ngOnInit(): void {
  }

  openModal(){
  this.appComp.changemodalCamp(true)
  
  }

}
