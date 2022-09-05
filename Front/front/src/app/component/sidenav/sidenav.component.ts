import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth-service';
import { Service } from 'src/app/service/service';
import { navbarDataDoctor, navbarDataParents } from './nav--data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navData: any

  constructor(private auth_service: AuthService, private appCom: AppComponent, private service: Service) { }

  ngOnInit(): void {
    var rol = this.service.getRol()
    rol === 'Parent' ? this.navData = navbarDataParents : this.navData = navbarDataDoctor
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  ValidateLogOut(x: string) {
    if (x === 'login') {
      //console.log("out")
      this.auth_service.logOut()
      this.appCom.Log(false)
    }
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }


}
