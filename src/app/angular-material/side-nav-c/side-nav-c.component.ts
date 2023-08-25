import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { container } from 'webpack';
declare var $: any
@Component({
  selector: 'app-side-nav-c',
  templateUrl: './side-nav-c.component.html',
  styleUrls: ['./side-nav-c.component.css'],

})
export class SideNavCComponent implements OnInit {


  navList = [
    {
      name: 'Dashboard',
      icon: 'bx bxs-dashboard',
      link: '/material/test/navTab',
      title: 'Dashboard',
      isValue: 1
    },
    {
      name: 'Report',
      icon: 'bx bxs-report',
      link: '/material/test2',
      title: 'Report',
      isValue: 2

    },
    {
      name: 'Database',
      icon: 'bx bxs-data',
      link: '/home',
      title: 'Database',
      isValue: 3

    }
  ];


  constructor() {
    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip()

    // })
  }

  ngOnInit(): void {

  }

  isValue: number = 1;

  toggle1() { this.isValue = 1; }
  toggle2() { this.isValue = 2; }
  toggle3() { this.isValue = 3; }
  // toggle4() { this.isValue = 4; }


}
