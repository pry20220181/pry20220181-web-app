import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HealthCenterRequest } from 'src/app/request/healthcenter-request';
import { Ubigeo } from 'src/app/request/ubigeo';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
declare var $: any;

@Component({
  selector: 'app-modal-vacc-inven',
  templateUrl: './modal-vacc-inven.component.html',
  styleUrls: ['./modal-vacc-inven.component.css']
})
export class ModalVaccInvenComponent implements OnInit {

  constructor(private appComp: AppComponent,
    private centers: HealthCenterRequest,
    private vaccination: VaccinationRquest,) { }

  listVaccines: any[] = []
  listUbigeo: any[] = []
  Vacc:any
  countVacc:any
  centerData:any

  finalData = {
      inventoryId: 0,
      vaccineId: 0,
      healthCenterId: 0,
      vaccineName: "string",
      healthCenterName: "string",
      stock: 0
  }
  ngOnInit(): void {
    
    this.getPlaces()
    this.getVacinnes()

    $(document).ready(function () {
      $("#exampleModal1").modal('show')
    });
  }
  getVacinnes() {
    this.vaccination.getAll().subscribe((data: any) => {
      this.listVaccines = data.value.vaccines
      console.log(data)
    })
  }
  getPlaces() {
    this.centers.getAll().subscribe((data: any) => {
      this.listUbigeo = data.value.healthCenters
      console.log(data)
      console.log("list",this.listUbigeo)

    })
  }

  toggleleModal() {
    this.appComp.changemodalVaccInv(false)
  }

  RegisterModal() {

    
    this.finalData.healthCenterId=parseInt(this.centerData[0])
    this.finalData.healthCenterName=this.centerData.slice(2)
    this.finalData.inventoryId=1
    this.finalData.stock=parseInt(this.countVacc)
    this.finalData.vaccineId=parseInt(this.Vacc[0])
    this.finalData.vaccineName= this.Vacc.slice(2)
    
    console.log("final",this.finalData)

    this.vaccination.postVaccInv(this.finalData).subscribe(res=>{
      console.log(res)
    })
    this.appComp.changemodalVaccInv(false)
  }

}
