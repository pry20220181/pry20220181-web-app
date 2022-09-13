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
  childData = {
    dni: "string",
    firstName: "string",
    lastName: "string",
    birthdate: "new Date",
    gender: "string"
  }

  @Input()
  countform = "";
  @Input()
  parentdata: any = []

  constructor(private route: Router,
    private register: Register) { }

  ngOnInit(): void {

    console.log("child compo", this.parentdata)
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
    this.childData.dni=this.usuario.dni
    this.childData.firstName=this.usuario.nombre
    this.childData.lastName=this.usuario.apellido
    this.childData.birthdate=new Date(this.usuario.birthdate).toISOString()
    this.childData.gender=this.usuario.genero

    this.finalData.children.push(this.childData)

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
