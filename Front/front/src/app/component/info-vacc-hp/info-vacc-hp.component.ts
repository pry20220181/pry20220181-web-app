import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $: any;

@Component({
  selector: 'app-info-vacc-hp',
  templateUrl: './info-vacc-hp.component.html',
  styleUrls: ['./info-vacc-hp.component.css']
})
export class InfoVaccHpComponent implements OnInit {

  constructor(private appComp:AppComponent,
    ) { }

  ngOnInit(): void {

    $(document).ready(function () {
      $("#exampleModal1").modal('show')
    });
  }

  openModal(){
    this.appComp.changemodalInfoVacc(true)
  }

}
