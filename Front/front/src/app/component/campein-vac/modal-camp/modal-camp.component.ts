import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CampaingRequest } from 'src/app/request/campaing-request';
import { Ubigeo } from 'src/app/request/ubigeo';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
declare var $: any;

@Component({
  selector: 'app-modal-camp',
  templateUrl: './modal-camp.component.html',
  styleUrls: ['./modal-camp.component.css']
})
export class ModalCampComponent implements OnInit {

  listUbigeo: any[] = []
  listVaccines: any[] = []
  finalData = {
    name: "",
    description: "",
    image: "",
    startDateTime: "",
    endDateTime: "",
    vaccinesForCampaign: [{
    }
    ],
    campaignHealthCenters: [{
    }]
  }

  constructor(private appComp: AppComponent,
    private ubigeo: Ubigeo,
    private vaccination: VaccinationRquest,
    private campaing:CampaingRequest) { }


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
      //console.log(data)
    })
  }

  getPlaces() {
    this.ubigeo.getAll().subscribe((data: any) => {
      this.listUbigeo = data.value.ubigeos
      //console.log(data)
    })
  }

  toggleleModal() {
    this.appComp.changemodalCamp(false)
  }

  RegisterModal() {
    this.finalData.startDateTime=new Date(this.finalData.startDateTime).toISOString()
    this.finalData.endDateTime=new Date(this.finalData.endDateTime).toISOString()

    
    console.log(this.listUbigeo)
    console.log(this.listVaccines)
    this.finalData.campaignHealthCenters.pop()
    this.finalData.vaccinesForCampaign.pop()

    for(let i=0;i<this.listUbigeo.length;i++){
      if(this.listUbigeo[i].ubigeoCode===true){
        console.log(this.listUbigeo[i].ubigeoCode,i)
        this.finalData.campaignHealthCenters.push({healthCenterId:this.listUbigeo[i].ubigeoId})
      }
    }

    for(let i=0;i<this.listVaccines.length;i++){
      if(this.listVaccines[i].description===true){
        this.finalData.vaccinesForCampaign.push({vaccineId:this.listVaccines[i].id})
      }
    }
    
    console.log(this.finalData)
    this.campaing.post(this.finalData).subscribe(result=>{
      console.log(result)
      alert("Campaña registrada")
    })
    this.appComp.changemodalCamp(false)
  }

  selected() {
    

  }



}
