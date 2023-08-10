import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {
  routerOutletComponent: object;
  routerOutletComponentClass: string;

  onActivate(event: any): void {
    debugger;
    this.routerOutletComponent = event;
    // this.routerOutletComponentClass = event.constructor.name;
    this.routerOutletComponentClass = this.constructor.name;
    console.log('anuj here is the component name=>', this.constructor.name);

    console.log("Activated: ", this.routerOutletComponentClass);
  }


  constructor(public bookmarkRoot: HeroService) {
    this.bookmarkRoot.callToggle.subscribe((data) => {
      this.helloThere();


    })
  }

  ngOnInit(): void {

  }
  helloThere() {
    debugger;

    console.log('function call here')
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarCollapse = document.getElementById('sidebarCollapse');

    if (sidebarCollapse && sidebar && content) {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');

    }
  }












}
