import { HttpClient } from '@angular/common/http';
import { Component, Type } from '@angular/core';
import { HeroService } from './hero.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routerOutletComponent: object;
  routerOutletComponentClass: string;
  onActivate(event: any): void {
    debugger;
    this.routerOutletComponent = event;
    this.routerOutletComponentClass = event.constructor.name;
    console.log("Activated: ", this.routerOutletComponentClass);
    this.appsevice.nextCount1(this.routerOutletComponentClass);
    debugger


  }
  title = 'Angular Lab';
  constructor(private http: HttpClient, private appsevice: HeroService, private route: ActivatedRoute,
    private router: Router) {


  }
}
