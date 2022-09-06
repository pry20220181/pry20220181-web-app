import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario = {
    userId: '',
    dni: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  //1 parent //2 health personel
  tipeuser = '1'
  showpageP = false


  constructor(private appCom: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  Register() {
    console.log(this.tipeuser)
    if (this.tipeuser === '1') {
      this.showpageP = true
    }else{
      this.showpageP = false
    }
  }

  Login() {
    this.appCom.onToggleLogin(true)
    this.router.navigate(['/', 'login']);
  }

}
