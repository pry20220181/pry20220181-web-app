import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/request/register-user-request';

@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.css']
})
export class ChildformComponent implements OnInit {

  
  usuario = {
    nombre: '',
    apellido: '',
    dni: '',
    genero: '',
  }
  cont=0
  toggleShow=true

  finalData ={
    dni: "string",
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    telephone: "string",
    ubigeoId: 0,
    relationship: "string",
    children: [
      {
        dni: "string",
        firstName: "string",
        lastName: "string",
        birthdate: "2022-09-12T04:18:35.828Z",
        gender: "string"
      }
    ]
  }

  @Input()
  countform="";
  @Input()
  parentdata:any=[]

  constructor(private route:Router,
    private register:Register) { }

  ngOnInit(): void {
    console.log("child compo",this.parentdata)
  }

  Register(){
    this.cont++

    this.finalData.dni=this.parentdata[0].dni
    this.finalData.firstName=this.parentdata[0].firstName
    this.finalData.lastName=this.parentdata[0].lastName
    this.finalData.password=this.parentdata[0].password
    this.finalData.email=this.parentdata[0].email

    this.finalData.telephone=this.parentdata[1].telefono
    this.finalData.ubigeoId=0 //ubigeoiD
    this.finalData.relationship="relationship"
    this.finalData.email=this.parentdata[1].email

    this.finalData.children[0].dni=this.usuario.dni
    this.finalData.children[0].firstName=this.usuario.nombre
    this.finalData.children[0].lastName=this.usuario.apellido
    this.finalData.children[0].birthdate="2022"
    this.finalData.children[0].gender=this.usuario.genero

    console.log("data final",this.finalData)
    this.register.parentRequest(this.finalData).subscribe(result=>{
      if (result != null){
        console.log(result)
      }
    })

    if (this.cont===parseInt(this.countform)) {
      this.toggleShow=false
      this.route.navigate(['/', 'login']);
      location.reload()
    }

  }

}
