import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ChildrenRquest } from 'src/app/request/children-request';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  ListPrint: any[] = [];
  formModal:any

  constructor(private router: Router,private ChildrenR:ChildrenRquest, private appComp:AppComponent) { }

  
  ngOnInit(): void {
    this.ChildrenR.getAll().subscribe((data:any)=>{
      this.ListPrint = data.value.children
      console.log(data.value.children)
    })
  }

  search(event:any){

  }

  toggleleModal(){
    this.appComp.changemodal(true)
    console.log("entro")
  }
  
  routeInfoP(){
    this.router.navigate(['/', 'info-p']);
  }
 
}
