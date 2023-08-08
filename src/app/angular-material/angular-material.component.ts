import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {

  }
  helloThere() {
    debugger;

    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    if (sidebar && content) {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');

    }
  }












}
