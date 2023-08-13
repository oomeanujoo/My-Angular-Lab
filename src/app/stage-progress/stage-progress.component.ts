import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-stage-progress',
  templateUrl: './stage-progress.component.html',
  styleUrls: ['./stage-progress.component.css']
})
export class StageProgressComponent implements OnInit {
  items: boolean[] = [];
  count: boolean;
  stageO = false;

  constructor(private appsevice: HeroService) { }

  ngOnInit(): void {
    this.appsevice.count.subscribe(c => {
      this.count = c;
      this.stageO = false;

      this.hereisthefnc()

    });
  }
  names = [];
  addItem(newItem: boolean) {
    this.items.push(newItem);
    this.hereisthefnc()
  }







  hereisthefnc() {
    const div1 = document.querySelector('.step--1')
    const div2 = document.querySelector('.step--2')
    const div3 = document.querySelector('.step--3')
    var stageO = this.items[0]
    var stageT = this.count
    if (stageO == true) {
      div1?.classList.remove('step-active')
      div2?.classList.add('step-active')
      this.stageO = false;
    } else if (stageT == true) {
      div2?.classList.remove('step-active')
      div3?.classList.add('step-active')
      stageT = false;
    }

  }

}
