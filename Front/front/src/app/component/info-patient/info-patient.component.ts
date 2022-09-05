import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { ChildrenRquest } from 'src/app/request/children-request';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
import { Service } from '../../service/service';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit, OnDestroy {

  constructor(private appComp: AppComponent,
    private _service: Service,
    private ChildrenR: ChildrenRquest,
    private VaccinationR: VaccinationRquest) { }

  ListPrint: any;
  ListVaccinationRe: any;
  ListVaccinationAd: any;
  suscription: Subscription | undefined;

  ngOnInit(): void {
    this.getChildByDNI()
    this.getVacciAdmin()
    this.getVacciRequ()

    this.suscription = this.VaccinationR.refresh$.subscribe(() => {
      this.getVacciAdmin();
      this.getVacciRequ();
    })
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

  getChildByDNI() {
    this.ChildrenR.getByDNI(this._service.getDNIChild()).subscribe((data: any) => {
      this.ListPrint = data.value.child
      //console.log("data",data.value.child)
    })
  }

  getVacciRequ() {
    //console.log("id",this._service.getIdChild())
    this.VaccinationR.getVaRe(this._service.getIdChild()).subscribe((data: any) => {
      this.ListVaccinationRe = data.value.remainingDoses
      console.log("vacination RE", data.value.remainingDoses)
    })
  }

  getVacciAdmin() {
    //console.log("id",this._service.getIdChild())
    this.VaccinationR.getVaAd(this._service.getIdChild()).subscribe((data: any) => {
      this.ListVaccinationAd = data.value.administeredDoses
      console.log("vacination AD", data.value.administeredDoses)
    })
  }

  toggleleModal(id: number) {
    //console.log("IDDD",id)
    this._service.setIdRegister(id)
    this.appComp.changemodal(true)
  }

}
