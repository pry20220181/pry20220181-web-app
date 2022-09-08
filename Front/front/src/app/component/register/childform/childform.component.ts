import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  @Input()
  countform="";

  constructor(private route:Router) { }

  ngOnInit(): void {
    console.log(this.countform)
  }

  Register(){
    this.cont++
    console.log("a-- ",this.cont)
    console.log("b-- ",parseInt(this.countform))
    if (this.cont===parseInt(this.countform)) this.route.navigate(['/','login'])
  }

}
