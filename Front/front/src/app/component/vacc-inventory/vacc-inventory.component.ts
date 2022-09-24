import { Component, OnInit } from '@angular/core';
import { HealthCenterRequest } from 'src/app/request/healthcenter-request';

@Component({
  selector: 'app-vacc-inventory',
  templateUrl: './vacc-inventory.component.html',
  styleUrls: ['./vacc-inventory.component.css']
})
export class VaccInventoryComponent implements OnInit {

  constructor(private helthcenter:HealthCenterRequest,
    ) { }

  ListCenter:any[]=[]

  ngOnInit(): void {
    this.getAllCenter()

  }

  getAllCenter(){
    this.helthcenter.getAll().subscribe((res:any) =>{
      console.log(res)
      this.ListCenter=res.value.healthCenters
      console.log(this.ListCenter)
    })
  }
}
