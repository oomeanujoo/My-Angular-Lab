import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routerOutletComponent: object;
  routerOutletComponentClass: string;
  component: any

  onActivate(event: any): void {
    debugger;
    this.routerOutletComponent = event;
    this.routerOutletComponentClass = event.constructor.name;
    console.log("Activated: ", this.routerOutletComponentClass);
    this.component = this.routerOutletComponentClass
    this.appsevice.nextCount1(this.component);
    debugger;

  }
  title = 'Angular Lab';
  constructor(private http: HttpClient, private appsevice: HeroService) {


  }
}
