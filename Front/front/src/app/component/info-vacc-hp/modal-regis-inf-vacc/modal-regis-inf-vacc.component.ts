import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { VaccinationRquest } from 'src/app/request/vaccination-request';

declare var $: any;

@Component({
  selector: 'app-modal-regis-inf-vacc',
  templateUrl: './modal-regis-inf-vacc.component.html',
  styleUrls: ['./modal-regis-inf-vacc.component.css']
})
export class ModalRegisInfVaccComponent implements OnInit {

  constructor(private appComp: AppComponent,
    private vaccination: VaccinationRquest,) { }

    ListSchems:any[]=[]

  name=''
  description=''
  maxTemp=''
  minTemp=''
  ngOnInit(): void {
    this.getVaccSchems()

    $(document).ready(function () {
      $("#exampleModal1").modal('show')
    });
  }

  getVaccSchems() {
    this.vaccination.getVaccSchems().subscribe((data: any) => {
      this.ListSchems = data.value.vaccines
      console.log("schemes",data)
    })
  }

  toggleleModal() {
    this.appComp.changemodalInfoVacc(false)
  }

  RegisterModal() {

    
   /*  this.finalData.healthCenterId=parseInt(this.centerData[0])
    this.finalData.healthCenterName=this.centerData.slice(2)
    this.finalData.inventoryId=1
    this.finalData.stock=parseInt(this.countVacc)
    this.finalData.vaccineId=parseInt(this.Vacc[0])
    this.finalData.vaccineName= this.Vacc.slice(2) 
    
    console.log("final",this.finalData)

    this.vaccination.postVaccInv(this.finalData).subscribe(res=>{
      console.log(res)
    })*/
    this.appComp.changemodalInfoVacc(false)
  }
}
