import { Component, OnInit } from '@angular/core';
import { AngularMaterialComponent } from 'src/app/angular-material/angular-material.component';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  hell: any;

  constructor(public bookmarkRoot: HeroService, private appsevice: HeroService) { }

  ngOnInit(): void {

    this.appsevice.hell.subscribe(d => {
      this.hell = d;
      debugger;


    });

  }
  onClick() {
    debugger
    this.bookmarkRoot.callToggle.next(true);
  }


}
