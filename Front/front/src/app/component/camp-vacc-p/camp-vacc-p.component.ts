import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-camp-vacc-p',
  templateUrl: './camp-vacc-p.component.html',
  styleUrls: ['./camp-vacc-p.component.css']
})
export class CampVaccPComponent implements OnInit {

  constructor(private _service:VaccinationRquest,
    private appComp:AppComponent,
    private service:Service) { }

  ListShow:any[]=[]
  ngOnInit(): void {

    this.viewdata()
  }

  viewdata() {
    this._service.getVaccCamp().subscribe((data: any) => {
      this.ListShow = data.value.vaccinationCampaigns
      
      console.log("Dta", this.ListShow)
    })
  }

  routeInfoP(number:number){
    
    this.service.setvaccCampId(number)
    this.appComp.changemodalVaccCamp(true)
  }
}
