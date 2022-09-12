import { Component, Input, OnInit } from '@angular/core';

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

  togglechildform=false
  constructor() { }
  @Input()
  parentData={}
  union:any=[]
  

  ngOnInit(): void {
    console.log("data",this.parentData)
  }
  
  Register() {
    this.union.push(this.parentData,this.usuario)
    this.togglechildform=true
  }

  convert(int:string){
    return parseInt(int)
  }


}
