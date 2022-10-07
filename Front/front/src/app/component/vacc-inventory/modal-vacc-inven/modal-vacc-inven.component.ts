import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
import { Service } from 'src/app/service/service';
declare var $: any;

@Component({
  selector: 'app-modal-vacc-inven',
  templateUrl: './modal-vacc-inven.component.html',
  styleUrls: ['./modal-vacc-inven.component.css']
})
export class ModalVaccInvenComponent implements OnInit {

  constructor(private appComp: AppComponent,
    private vaccination: VaccinationRquest,
    private _service: Service) { }

  listVaccines: any[] = []
  listUbigeo: any[] = []
  Vacc:any
  countVacc:any
  centerData:any

  finalData = {
      inventoryId: 0,
      stockToAdd: 0,
  }
  ngOnInit(): void {
    
    $(document).ready(function () {
      $("#exampleModal1").modal('show')
    });

    console.log("id",this._service.getInventoryId())
  }
 

  toggleleModal() {
    this.appComp.changemodalVaccInv(false)
  }

  RegisterModal() {

    this.finalData.inventoryId=this._service.getInventoryId()
    this.finalData.stockToAdd=this.countVacc

    this.vaccination.postVaccInv(this.finalData).subscribe(res=>{
      console.log(res)
    })
    this.appComp.changemodalVaccInv(false)
  }

}
