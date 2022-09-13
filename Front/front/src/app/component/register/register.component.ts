import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Register } from 'src/app/request/register-user-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario = {
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
    private router: Router,
    private register:Register) { }

  ngOnInit(): void {
  }

  Register() {
    if (this.tipeuser === '1') {
      this.showpageP = true
    }else{
      this.register.personnelRequest(this.usuario).subscribe(data=>{
        console.log("DATA register",data)
        this.router.navigate(['/', 'login']);
      })
      this.showpageP = false
    }
  }

  Login() {
    this.appCom.onToggleLogin(true)
    this.router.navigate(['/', 'login']);
  }

}
