import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {navbarData} from './nav--data';

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

  constructor() { }

  ngOnInit(): void {
  }
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  navData = navbarData

  ValidateLogOut(x: string) {
    if (x === 'login') {
      console.log("out")
    }
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }


}
