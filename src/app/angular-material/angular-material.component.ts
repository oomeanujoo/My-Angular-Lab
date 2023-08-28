import { FormsModule } from '@angular/forms';
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
  sideNavStatus: any = true;
  mobile: boolean;
  BurgerFlag: boolean;


  onActivate(event: any): void {

    this.routerOutletComponent = event;
    // this.routerOutletComponentClass = event.constructor.name;
    // this.routerOutletComponentClass = this.constructor.name;
    // console.log('anuj here is the component name=>', this.routerOutletComponentClass);
    // this.bookmarkRoot.nextCount1(this.routerOutletComponentClass);

    // console.log("Activated: ", this.routerOutletComponentClass);
  }


  constructor(public bookmarkRoot: HeroService) {
    // this.bookmarkRoot.callToggle.subscribe((data) => {
    //   // this.helloThere();




    // })

    this.bookmarkRoot.callToggle3.subscribe((e) => {
      this.sideNavStatus = e
      // this.sideNavStatus = !this.sideNavStatus
      debugger;

    })
  }

  ngOnInit(): void {

    debugger;

    this.routerOutletComponentClass = this.constructor.name;
    console.log('anuj here is the component name=>', this.routerOutletComponentClass);
    var PassID = 'one'
    this.bookmarkRoot.nextCount1(PassID);

  }
  // helloThere() {
  //   console.log('function call here')
  //   const sidebar = document.getElementById('sidebar');
  //   const content = document.getElementById('content');
  //   const sidebarCollapse = document.getElementById('sidebarCollapse');

  //   if (sidebarCollapse && sidebar && content) {
  //     sidebar.classList.toggle('active');
  //     content.classList.toggle('active');

  //   }
  // }

  toggleSidebar() {
    this.sideNavStatus = !this.sideNavStatus
    console.log('nav=>', this.sideNavStatus);


  }

  toggleOut() {
    this.sideNavStatus = !this.sideNavStatus
    console.log('nav=>', this.sideNavStatus);

  }
















}
