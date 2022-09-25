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
    birthdate: '',
  }
  countChild=0
  cont = 0
  toggleShow = true
  toggleregister = false
  labelbuttom = 'Siguiente'

  finalData = {
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
        birthdate: "new Date",
        gender: "string"
      }
    ]
  }
  childData = [{
    dni: '',
    firstName: "string",
    lastName: "string",
    birthdate: "new Date",
    gender: "string"
  }]

  @Input()
  countform = "";
  @Input()
  parentdata: any = []

  constructor(private route: Router,
    private register: Register) { }

  ngOnInit(): void {
    this.finalData.children.pop()
    this.chargedataParent()
  }

  chargedataParent() {
    this.finalData.dni = this.parentdata[0].dni
    this.finalData.firstName = this.parentdata[0].firstName
    this.finalData.lastName = this.parentdata[0].lastName
    this.finalData.password = this.parentdata[0].password
    this.finalData.email = this.parentdata[0].email

    this.finalData.telephone = this.parentdata[1].telefono
    this.finalData.ubigeoId = 0 //ubigeoiD
    this.finalData.relationship = "Father"
  }
    


  Siguiente() {
    this.cont===0?this.childData.pop():null
    this.childData.push({dni:this.usuario.dni,firstName:this.usuario.nombre,lastName:this.usuario.apellido,birthdate:new Date(this.usuario.birthdate).toISOString(),gender:this.usuario.genero})

    //clean text boxes
    this.usuario = {
      nombre: '',
      apellido: '',
      dni: '',
      genero: '',
      birthdate: '',
    }

    this.finalData.children=this.childData
    this.cont++

    if (this.cont+1 === parseInt(this.countform)) {
      this.labelbuttom = 'Registrar'
    }

    if (this.cont === parseInt(this.countform)) {
      console.log("data final", this.finalData)
      this.register.parentRequest(this.finalData).subscribe(result => {
        if (result != null) {
          console.log(result)
        }
          this.toggleShow=false
          this.route.navigate(['/', 'login']);
          location.reload()
      })
    }

  }

}
