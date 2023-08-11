import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
      link: '/material/test'
    },
    {
      name: 'Report',
      icon: 'bx bxs-report',
      link: '/material/test2'
    },
    {
      name: 'Database',
      icon: 'bx bxs-data',
      link: ''
    }
  ];


  constructor() {

  }

  ngOnInit(): void {
  }




}
