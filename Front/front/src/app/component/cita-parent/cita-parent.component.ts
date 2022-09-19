import { Component, OnInit } from '@angular/core';
import { ChildrenRquest } from 'src/app/request/children-request';
import { Ubigeo } from 'src/app/request/ubigeo';
import { VaccinationRquest } from 'src/app/request/vaccination-request';

@Component({
  selector: 'app-cita-parent',
  templateUrl: './cita-parent.component.html',
  styleUrls: ['./cita-parent.component.css']
})
export class CitaParentComponent implements OnInit {

  constructor(private vacc: VaccinationRquest,
    private vaccination: VaccinationRquest,
    private ChildrenR: ChildrenRquest,
    private ubigeo: Ubigeo,) { }

  finalData = {
    healthCenterId: 0,
    parentId: 0,
    childId: 0,
    appointmentDateTime: '',
    vaccinesIds: [1]
  }

  listVaccines: any[] = []
  listUbigeo: any[] = []
  listChilds: any[] = []
  valVaccinId = 0

  ngOnInit(): void {
    this.getAllChilds()
    this.getPlaces()
    this.getVacinnes()
  }
  getAllChilds() {
    this.ChildrenR.getbyParent().subscribe((data: any) => {
      this.listChilds = data.value.children
      console.log(data)
    })
  }

  getVacinnes() {
    this.vaccination.getAll().subscribe((data: any) => {
      this.listVaccines = data.value.vaccines
      console.log(data)
    })
  }

  getPlaces() {
    this.ubigeo.getAll().subscribe((data: any) => {
      this.listUbigeo = data.value.ubigeos
      console.log(data)
    })
  }


  Register() {
    this.finalData.appointmentDateTime = new Date(this.finalData.appointmentDateTime).toISOString()
    this.finalData.childId = parseInt(String(this.finalData.childId))
    this.finalData.healthCenterId = parseInt(String(this.finalData.healthCenterId))
    this.finalData.vaccinesIds.pop()
    this.finalData.vaccinesIds.push(this.valVaccinId)//parseInt(String(this.finalData.vaccinesIds))



    this.vacc.postVacciAppo(this.finalData).subscribe(reuslt => {
      console.log(reuslt)
    })
  }

}
