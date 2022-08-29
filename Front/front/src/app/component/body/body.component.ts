import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface ModalToggle {
  modal: boolean;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Output() onToggleModal: EventEmitter<ModalToggle> = new EventEmitter();

  modal=false;

  getBodyClass(): string {
    let styleClass = ''
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

}
