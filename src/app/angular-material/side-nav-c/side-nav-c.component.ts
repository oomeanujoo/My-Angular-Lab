import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-c',
  templateUrl: './side-nav-c.component.html',
  styleUrls: ['./side-nav-c.component.css'],

})
export class SideNavCComponent implements OnInit {
  showFiller = false;
  sidenavWidth = 4;
  ngStyle: string;
  @Output() closeSideNav = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }
  onToggleClose() {
    this.closeSideNav.emit();
  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
}
}
