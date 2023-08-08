import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public routerChanged1 = new Subject<boolean>()
  // routerChanged = true;
  title = 'Angular Lab';
  constructor(private http: HttpClient) {


  }
}
