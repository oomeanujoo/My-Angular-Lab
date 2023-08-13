import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private appsevice: HeroService) { }

  ngOnInit(): void {

  }

  stageTwo(count: boolean) {
    this.appsevice.nextCount(count);
  }

}
