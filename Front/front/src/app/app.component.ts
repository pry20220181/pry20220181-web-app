import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth-service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface NavBarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _service: AuthService) { }

  ngOnInit(): void {

  }

  isSideNavCollapsed = false;
  screenWidth = 0;
  modalinf = false;
  modalcamp = false;
  modalcavniv = false;
  modalinfovacc = false;
  loged = localStorage.getItem('token') ? true : false;
  login = true

  onToggleLogin(data: boolean) {
    this.login = data
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  onToggleNavBar(data: NavBarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  changemodalInfo(modal: boolean) {
    this.modalinf = modal
    //console.log(this.modal)
  }
  
  changemodalCamp(modal: boolean) {
    this.modalcamp = modal
    //console.log(this.modal)
  }

  Log(log: boolean) {
    this.loged = log
    //console.log("LOG")
  }

  changemodalVaccInv(modal: boolean) {
    this.modalcavniv = modal
    //console.log(this.modal)
  } 
  changemodalInfoVacc(modal: boolean) {
    this.modalinfovacc = modal
    //console.log(this.modal)
  }
}
