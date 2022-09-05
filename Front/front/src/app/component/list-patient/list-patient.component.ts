import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ChildrenRquest } from 'src/app/request/children-request';
import { Service } from '../../service/service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  ListPrint: any[] = [];
  formModal:any

  constructor(private router: Router,
    private ChildrenR:ChildrenRquest, 
    private appComp:AppComponent,
    private _service:Service) { }

  
  ngOnInit(): void {
    this.getAllChilds()
  }

  getAllChilds(){
    this.ChildrenR.getAll().subscribe((data:any)=>{
      this.ListPrint = data.value.children
      //console.log(data.value.children)
    })
  }

  search(event:any){

  }

  toggleleModal(){
    this.appComp.changemodal(false)
    //console.log("entro")
  }
  
  routeInfoP(dni:string,id:string){
    this.router.navigate(['/', 'info-p']);
    this._service.setDNIChild(parseInt(dni))
    this._service.setIdChild(parseInt(id))
  }
 
}
