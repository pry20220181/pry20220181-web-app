import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HealthCenterRequest } from 'src/app/request/healthcenter-request';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
import { Service } from 'src/app/service/service';
declare var $: any;


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ListVaccinationRe: any;
  dni = this._service.getDNIChild()
  ListHealthCenter: any;
  healthcenter:any

  registerData = {
    doseDetailId:0,
    childId:0,
    healthCenterId:0,
    healthPersonnelId:0,
    doseDate:'',
    observations:''
  }

  constructor(private appComp: AppComponent, 
    private _service: Service, 
    private VaccinationR: VaccinationRquest,
    private HealthCenterR:HealthCenterRequest) { }

  ngOnInit() {
    this.HealthCenterR.getAll().subscribe((data:any)=>{
      this.ListHealthCenter=data.value.healthCenters
      //console.log("this.ListHealthCenter",this.ListHealthCenter)
    })

    $(document).ready(function () {
      $("#exampleModal").modal('show')
    });

    this.VaccinationR.getVaRe(this._service.getIdChild()).subscribe((data: any) => {
      this.ListVaccinationRe = data.value.remainingDoses[this._service.getIdRegister()]
      //console.log("vacination RE",this.ListVaccinationRe)
    })

  }
  toggleleModal() {
    this.appComp.changemodalInfo(false)
  }

  RegisterModal(){
    this.registerData.doseDetailId=this.ListVaccinationRe.remainingDoseId
    this.registerData.childId=this._service.getIdChild()
    this.registerData.healthCenterId=parseInt(this.healthcenter)
    this.registerData.observations='obs'
    this.registerData.doseDate='2022-10-07T22:20:40.706Z'
    this.VaccinationR.postVa(this.registerData).subscribe(result =>{
      if (result != null){
        console.log(result)
      }
    })

    this.appComp.changemodalInfo(false)
  }
}
