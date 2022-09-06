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
  modal = false;
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

  changemodal(modal: boolean) {
    this.modal = modal
    //console.log(this.modal)
  }

  Log(log: boolean) {
    this.loged = log
    //console.log("LOG")
  }
}
