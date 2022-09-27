import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationRquest } from 'src/app/request/vaccination-request';
import { Vaccine } from 'src/app/models/Vaccine-model'

@Component({
  selector: 'app-detail-vac-parent',
  templateUrl: './detail-vac-parent.component.html',
  styleUrls: ['./detail-vac-parent.component.css']
})
export class DetailVacParentComponent implements OnInit {

  constructor(private vaccineR: VaccinationRquest,
    private route: ActivatedRoute) { }

  vaccine : any

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let vaccineId = params["vaccineid"]
      console.log("Para Detalle Vacuna se mostrará del ID: " + vaccineId)
      this.vaccineR.getVaccineById(vaccineId).subscribe((response: any) => {
        let vaccineFromApi = response['value']['vaccine']
        console.log(vaccineFromApi)
        this.vaccine = {
          vaccineId : vaccineFromApi.id,
          vaccineName : vaccineFromApi.name,
          description : vaccineFromApi.description,
          minTemperature: vaccineFromApi.minTemperature,
          maxTemperature: vaccineFromApi.maxTemperature
        }
      })
    });
    
  }

}
