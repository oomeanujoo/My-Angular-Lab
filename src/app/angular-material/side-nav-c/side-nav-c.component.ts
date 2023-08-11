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
      icon: 'bx bxs-castle',
      link: '/material/test'
    },
    {
      name: 'Test 2',
      icon: 'bx bxs-castle',
      link: '/material/test2'
    },
    {
      name: 'Test 3',
      icon: 'bx bxs-castle',
      link: ''
    }
  ];


  constructor() {

  }

  ngOnInit(): void {
  }




}
