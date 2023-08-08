import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.css']
})
export class StageOneComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  stageOne(value: boolean) {
    this.newItemEvent.emit(value);
  }


}
