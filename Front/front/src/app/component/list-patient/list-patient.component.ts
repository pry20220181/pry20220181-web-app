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
  List: any[] = [];
  List2: any[] = this.List;
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
      this.List = data.value.children
      console.log("list",this.ListPrint)
    })
  }

  search(event:any){
    this.ListPrint=[]
    this.List2=[]
    this.ListPrint=this.List
    for(var i=0;i<this.List.length;i++){
    if(String(this.List[i].dni).includes(event.target.value) ){
      this.List2.push(this.List[i])
    }
  }
  this.ListPrint=this.List2
  }

  toggleleModal(){
    this.appComp.changemodalInfo(false)
    //console.log("entro")
  }
  
  routeInfoP(dni:string,id:string){
    this.router.navigate(['/', 'info-p']);
    this._service.setDNIChild(parseInt(dni))
    this._service.setIdChild(parseInt(id))
  }
 
}
