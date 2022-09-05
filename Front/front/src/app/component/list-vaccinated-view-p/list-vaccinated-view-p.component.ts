import { Component, OnInit } from '@angular/core';
import { VaccinationAd } from 'src/app/models/Vaccination-Ad-model';
import { ChildrenRquest } from 'src/app/request/children-request';
import { VaccinationRquest } from 'src/app/request/vaccination-request';

@Component({
  selector: 'app-list-vaccinated-view-p',
  templateUrl: './list-vaccinated-view-p.component.html',
  styleUrls: ['./list-vaccinated-view-p.component.css']
})
export class ListVaccinatedViewPComponent implements OnInit {

  constructor(private ChildrenR:ChildrenRquest,
     private vaccineR:VaccinationRquest ) { }

  ListChild:any[]=[]
  childId:any
  dataChild:any[]=[]

  ngOnInit(): void {
    this.getchilds()
  }

  getchilds(){
    this.ChildrenR.getbyParent().subscribe((data:any)=>{
      this.ListChild = data.value.children
      console.log("Dta",data)
    })
  }

  search(data:any){

  }

  viewdata(){
    this.vaccineR.getinfoChildById(this.childId).subscribe((data:any)=>{
      this.dataChild = data.value.vaccinationCard.vaccinationSchemes
      console.log("data vacconation",data)
    })

  }

}
