import { Component, OnInit } from '@angular/core';
import { HealthCenterRequest } from 'src/app/request/healthcenter-request';
import { VaccinationRquest } from 'src/app/request/vaccination-request';

@Component({
  selector: 'app-vacc-inventory',
  templateUrl: './vacc-inventory.component.html',
  styleUrls: ['./vacc-inventory.component.css']
})
export class VaccInventoryComponent implements OnInit {

  constructor(private helthcenter:HealthCenterRequest,
    private vacc:VaccinationRquest,

    ) { }
  openAccordion: boolean[] = []
  ListCenter:any[]=[]
  ListInfoVacc:any[]=[]

  ngOnInit(): void {
    this.getAllCenter()
    
    setTimeout(()=>{
      this.getInfoVacc()
    }, 500);
  }

  getAllCenter(){
    this.helthcenter.getAll().subscribe((res:any) =>{
      this.ListCenter=res.value.healthCenters
      console.log("Listcenter",this.ListCenter)
    })
  }

  getInfoVacc(){
    this.ListInfoVacc.pop()
    for(var i=0; i<this.ListCenter.length;i++){
    this.vacc.getVaccInve(this.ListCenter[i].healthCenterId,0).subscribe((res:any)=>{
      this.ListInfoVacc.push(res.value.inventories)
      console.log("info",this.ListInfoVacc)
      console.log("len",this.ListInfoVacc.length)
      console.log("[0]",this.ListInfoVacc[0][0].stock)

    })
  }
  
  }

  RedirectVac(id:string){

  }
}
