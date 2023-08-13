import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-c',
  templateUrl: './test-c.component.html',
  styleUrls: ['./test-c.component.css']
})
export class TestCComponent implements OnInit {
  isValue: number = 1;
  constructor() { }

  ngOnInit(): void {
  }


  toggle1() { this.isValue = 1; }
  toggle2() { this.isValue = 2; }
  toggle3() { this.isValue = 3; }
  toggle4() { this.isValue = 4; }


}
