import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
import { Service } from 'src/app/service/service';

declare var $: any;

@Component({
  selector: 'app-modal-camp-vacc-p',
  templateUrl: './modal-camp-vacc-p.component.html',
  styleUrls: ['./modal-camp-vacc-p.component.css']
})
export class ModalCampVaccPComponent implements OnInit {

  constructor(private appComp: AppComponent,
    private _service: VaccinationRquest,
    private service: Service) { }

  ListShow: any[] = []

  ngOnInit(): void {
    $(document).ready(function () {
      $("#exampleModal1").modal('show')
    });
    console.log("id", this.service.getvaccCampId())
    this.viewdata()
  }

  toggleleModal() {
    this.appComp.changemodalVaccCamp(false)
  }

  viewdata() {
    this._service.getVaccCamp().subscribe((data: any) => {
      console.log("Data", data)
      for (var i = 0; i < data.value.vaccinationCampaigns.length; i++)
        if (data.value.vaccinationCampaigns[i].vaccinationCampaignId === this.service.getvaccCampId()) {
          this.ListShow = data.value.vaccinationCampaigns
        }

      console.log("Save", this.ListShow)
    })
  }

}
