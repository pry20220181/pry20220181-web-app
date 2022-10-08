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
    finalData={
      name:'',
      description:'',
      minTemperature:0,
      maxTemperature:0,
      vaccinationSchemes:[
        {
          vaccinationSchemeId: 0,
          numberOfDoses: 0,
          possibleEffectsPostVaccine: ''
        }
      ]
    }

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
      console.log("schemes",data.value.vaccinationSchemes)
      this.ListSchems = data.value.vaccinationSchemes
    })
  }

  toggleleModal() {
    this.appComp.changemodalInfoVacc(false)
  }

  RegisterModal() {
   this.finalData.name=this.name
    this.finalData.description=this.description
    this.finalData.minTemperature=parseInt(this.minTemp)
    this.finalData.maxTemperature=parseInt(this.maxTemp)
    let arrschemid: any[]= []
    for (var i=0; i<this.ListSchems.length;i++){
      if(this.ListSchems[i].possibleEffectsPostVaccine===true){
        arrschemid.push({
          vaccinationSchemeId:this.ListSchems[i].vaccinationSchemeId,
          numberOfDoses:0,
          possibleEffectsPostVaccine:''
        })
      }

    }
    this.finalData.vaccinationSchemes=arrschemid
    
    console.log("final",this.finalData)

    this.vaccination.postVacc(this.finalData).subscribe(res=>{
      console.log(res)
    })
    this.appComp.changemodalInfoVacc(false)
  }
}
