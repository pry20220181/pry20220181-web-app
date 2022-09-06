import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginRequest } from 'src/app/request/login-request';
import { AuthService } from 'src/app/service/auth-service';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    username: '',
    password: ''
  }
  responsedata:any

  constructor(private login: LoginRequest, private router: Router,private appCom:AppComponent, private service:Service, private authservice:AuthService) { }

  ngOnInit(): void {
  }

  async Ingresar() {
    //console.log("user",this.usuario)
    this.login.proceedLogin(this.usuario).subscribe(result => {
      if (result != null) {
        this.responsedata=result
        localStorage.setItem('token',this.responsedata.value.accessToken)
        this.appCom.Log(true)
        console.log("access doctor?",this.authservice.haveAccessD())
        this.authservice.haveAccessD()?this.router.navigate(['/', 'homeD']):this.router.navigate(['/', 'homeP'])
        //this.service.getRol()==='Parent'?this.router.navigate(['/', 'homeP']):this.router.navigate(['/', 'homeD'])
        console.log("login",this.service.getRol()+'navigate')
      }
    })
  }
  
  Register(){
    this.appCom.onToggleLogin(false)
    this.router.navigate(['/','register']);
  }
}
