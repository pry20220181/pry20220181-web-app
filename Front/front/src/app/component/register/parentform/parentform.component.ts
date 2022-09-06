import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentform',
  templateUrl: './parentform.component.html',
  styleUrls: ['./parentform.component.css']
})
export class ParentformComponent implements OnInit {

  usuario = {
    userId: '',
    dni: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  
  Register() {

    
    }

}
