import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { VaccinationAd } from 'src/app/models/Vaccination-Ad-model';
import { ChildrenRquest } from 'src/app/request/children-request';
import { VaccinationRquest } from 'src/app/request/vaccination-request';

@Component({
  selector: 'app-list-vaccinated-view-p',
  templateUrl: './list-vaccinated-view-p.component.html',
  styleUrls: ['./list-vaccinated-view-p.component.css']
})
export class ListVaccinatedViewPComponent implements OnInit {

  constructor(private ChildrenR: ChildrenRquest,
    private vaccineR: VaccinationRquest,
    private router:Router) { }

  ListChild: any[] = []
  childId: any
  dataChild: any[] = []
  ListShow:any[]=[]

  ngOnInit(): void {
    this.getchilds()
  }

  getchilds() {
    this.ChildrenR.getbyParent().subscribe((data: any) => {
      this.ListChild = data.value.children
      console.log("Dta", data)
    })
  }


  viewdata() {
    this.vaccineR.getinfoChildById(this.childId).subscribe((data: any) => {
      this.dataChild = data.value.vaccinationCard.vaccinationSchemes
      console.log("Dta", data)
    })
    setTimeout(() => {
    this.processData() 
  }, 1500);

  }

  processData(){
    this.ListShow=[]
    for (var i = 0; i < this.dataChild.length; i++) {
      const scheme = this.dataChild[i]
      for (var j = 0; j < scheme.vaccines.length; j++) {
        const vaccines = scheme.vaccines[j]
        for (var k = 0; k < vaccines.doses.length;k++) {
          const doses = vaccines.doses[k]
          //this.ListShow.push(scheme.name,vaccines.name,doses.doseId,doses.putWhen,doses.healthPersonnel,doses.observations)
          this.ListShow.push({esquema:scheme.name,vacunaid:vaccines.vaccinesId,vacunas:vaccines.name,dosis:doses.doseId,fecha:doses.putWhen,doctor:doses.healthPersonnel,obs:doses.observations})
        }
      }
    }
  }
  RedirectVac(id:number){


    this.router.navigate(["/","detail-vac-p"])
  }

}
