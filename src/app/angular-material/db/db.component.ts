import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent implements OnInit {
  data: any;
  entercode: any;
  scanned: any;
  inputString: any;
  anim: any = 0
  intervalId: NodeJS.Timer;
  animationImg: ElementRef<any>;
  constructor(private http: HttpClient, private loader: NgxUiLoaderService, private el: ElementRef) { }
  @ViewChild('animation', { static: true }) gifElement: ElementRef;

  private interval: any;
  ngOnInit(): void {
    // this.showGifForThreeSeconds()

    this.apiCall()
  }

  status: any
  tableArr: any = []
  tableArrNew: any = [{
    type: '',
    entercode: 'NA',
    value: ''
  }]

  apiCall() {
    this.loader.start();
    this.http.get('https://api.postcodes.io/postcodes/OX49%205NU')
      .subscribe(res => {
        this.data = res
        this.tableArr = this.data.result.codes
        this.tableArrNew = Object.keys(this.tableArr).map(key => ({ type: key, value: this.tableArr[key] })); //Convert String to Array

        this.loader.stop();
        this.calculateAdjustedLength()

      })
  }


  processInputs(entercode: any) {
    // this.showGifForThreeSeconds()


    const inputArray = entercode.split('|').map((item: any) => item.trim());
    this.scanMultiple(inputArray);

  }

  flag: any = 0
  scanMultiple(entercodes: string[]) {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      for (const entercode of entercodes) {
        // const scannedCounts = [];
        for (let index = 0; index < this.tableArrNew.length; index++) {
          debugger
          if (entercode == this.tableArrNew[index].value) {
            this.tableArrNew[index].entercode = ''
            this.tableArrNew[index].entercode += 'scanned'
            // scannedCounts.push(scannedCount);
            // this.scanned = scannedCount
          }
        }
      }
      this.flag = 1
      this.calculateAdjustedLength()
    }, 3000);

    // this.tableArrNew.length = this.tableArrNew.length + 1 - this.scanned
    // console.log(this.tableArrNew.length);
    // console.log('this.scannedCounts=>', scannedCounts);


  }

  scannedTotal: number;
  calculateAdjustedLength() {
    let count = 0;


    if (this.flag == 1) {
      for (const item of this.tableArrNew) {
        if (item.entercode) {
          count++
        }
        this.scannedTotal = count;
        const adjustedLength = this.tableArrNew.length - this.scannedTotal;
        console.log('Adjusted Length:', adjustedLength);
        this.scannedTotal = adjustedLength
      }


    } else {
      this.scannedTotal = this.tableArrNew.length
    }
    this.progress = this.scannedTotal
    this.calculateDashOffset()


  }



  // animation() {
  //   const animationImg = document.querySelector<HTMLElement>('#animation');
  //   if (animationImg) {
  //     this.interval = setInterval(() => {
  //       animationImg.style.display = (animationImg.style.display === 'none') ? 'block' : 'none';
  //     }, 1000);
  //   }
  // }



  // ngOnDestroy() {
  //   // Clear the interval when the component is destroyed
  //   this.clearAnimation();
  // }


  // clearAnimation() {
  //   clearInterval(this.interval);
  // }


  // showGifForThreeSeconds() {
  //   // Show the GIF
  //   const animationImg = document.getElementById("animation");
  //   if (animationImg) {
  //     animationImg.style.display = "block"
  //     // Automatically hide the GIF after 3 seconds
  //     setTimeout(function () {
  //       animationImg.style.display = "none";
  //     }, 3000); // 3000 milliseconds = 3 seconds
  //   }

  // }


  showSpinner: boolean = false;

  @ViewChild('animation') animation: any;

  myFunction() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }



  @Input() progress: number = 0;

  calculateDashOffset() {
    // Calculate the stroke-dashoffset based on the progress percentage
    const circumference = 2 * Math.PI * 90; // Circumference of the circle
    return (circumference * this.progress);
  }
}
