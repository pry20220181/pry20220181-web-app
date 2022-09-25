import { Component, Input, OnInit } from '@angular/core';
import { Ubigeo } from 'src/app/request/ubigeo';

@Component({
  selector: 'app-parentform',
  templateUrl: './parentform.component.html',
  styleUrls: ['./parentform.component.css']
})
export class ParentformComponent implements OnInit {

  usuario = {
    telefono: '',
    genero: '',
    local: '',
    contchild: '',
  }

  ubigeoData:any=[]
  togglechildform=false
  constructor(private ubigeo:Ubigeo,) { }
  @Input()
  parentData={}
  union:any=[]
  

  ngOnInit(): void {
    this.ubigeo.getAll().subscribe((data:any)=>{
      this.ubigeoData=data.value.ubigeos
    })
  }
  
  Register() {
    this.union.push(this.parentData,this.usuario)
    this.togglechildform=true
  }

  convert(int:string){
    return parseInt(int)
  }


}
