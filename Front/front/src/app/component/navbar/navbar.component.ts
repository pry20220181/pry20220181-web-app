import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface NavBarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  @Output() onToggleNavBar: EventEmitter<NavBarToggle> = new EventEmitter();

  getBodyClass(): string {
    let styleClass = ''
    if (this.collapsed) {
      styleClass = 'header-trimmed';
    } else  {
      styleClass = 'header-md-screen';
    }
    return styleClass;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleNavBar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
}
