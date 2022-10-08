import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HealthCenterRequest } from 'src/app/request/healthcenter-request';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-vacc-inventory',
  templateUrl: './vacc-inventory.component.html',
  styleUrls: ['./vacc-inventory.component.css']
})
export class VaccInventoryComponent implements OnInit {

  constructor(private helthcenter: HealthCenterRequest,
    private vacc: VaccinationRquest,
    private appComp: AppComponent,
    private _service:Service,

  ) { }
  openAccordion: boolean[] = []
  ListCenter: any[] = []
  ListInfoVacc: any[] = []

  ngOnInit(): void {
    this.getAllCenter()

    setTimeout(() => {
      this.getInfoVacc()
    }, 500);
  }

  getAllCenter() {
    this.helthcenter.getAll().subscribe((res: any) => {
      this.ListCenter = res.value.healthCenters
    })
  }

  getInfoVacc() {
    this.ListInfoVacc.pop()
    for (var i = 0; i < this.ListCenter.length; i++) {
      this.vacc.getVaccInve(this.ListCenter[i].healthCenterId, 0).subscribe((res: any) => {
        this.ListInfoVacc.push(res.value.inventories)
        console.log(res.value)
      })
    }
  }


  openModal(value:string) {
    this.appComp.changemodalVaccInv(true)
    this._service.setInventoryId(parseInt(value))
    
  }
}
