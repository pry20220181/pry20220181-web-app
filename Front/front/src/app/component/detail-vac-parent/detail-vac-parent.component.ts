import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-vac-parent',
  templateUrl: './detail-vac-parent.component.html',
  styleUrls: ['./detail-vac-parent.component.css']
})
export class DetailVacParentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  vaccineId = 0

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vaccineId = params["vaccineid"]
      console.log("Para Detalle Vacuna se mostrará del ID: " + this.vaccineId)
    });
    
  }

}
