import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularMaterialComponent } from 'src/app/angular-material/angular-material.component';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  hell: any;
  hell2: any = false;
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = true;
  mobile: boolean;

  constructor(public bookmarkRoot: HeroService, private appsevice: HeroService) { }

  ngOnInit(): void {

    this.appsevice.hell.subscribe(d => {

      this.hell = d;


    });


  }
  // onClick() {
  //   this.bookmarkRoot.callToggle.next(true);
  // }

  toogle() {

    this.menuStatus = !this.menuStatus
    console.log('nav=>', this.menuStatus);

    this.bookmarkRoot.callToggle3.next(this.menuStatus);

  }


}
