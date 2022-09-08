import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {

  }
  
  Register() {
    this.togglechildform=true
  }

  convert(int:string){
    return parseInt(int)
  }


}
