import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, from } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { NgxUiLoaderService } from 'ngx-ui-loader';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  data: any;
  population: any = []
  year: any = []
  constructor(private http: HttpClient, private loader: NgxUiLoaderService) { }

  ngOnInit() {
    // this.apiCall().subscribe(res => {
    //   this.data = res
    //   for (let index = 0; index < this.data.data.length; index++) {
    //     this.population.push(this.data.data[index].Population);
    //     this.year.push(this.data.data[index].Year);

    //   }
    //   debugger;
    // })
    this.apiCall()


  }


  chartishere(type: any, id: any) {
    console.log(this.population)
    console.log(this.year)
    debugger;
    var myChart = new Chart(id, {
      type: type,
      data: {
        labels: this.year,
        datasets: [{
          label: '# of Votes',
          data: this.population,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // apiCall() {
  //   debugger;
  //   const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  //   const options = {
  //     method: 'GET',
  //     // headers: {
  //     //   'X-RapidAPI-Key': '97b4eeda23msh68d080c04c85ccfp1d5e97jsn752a3e196ace',
  //     //   'X-RapidAPI-Host': 'songstats.p.rapidapi.com'
  //     // }
  //   };

  //   return this.http.get(url)

  // }



  apiCall() {
    // this.http.get('http://localhost:3000/images')
    this.loader.start();
    this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .subscribe(res => {
        this.data = res
        for (let index = 0; index < this.data.data.length; index++) {
          this.population.push(this.data.data[index].Population);
          this.year.push(this.data.data[index].Year);

        }
        this.loader.stop();
        this.chartishere('bar', 'bar')
        this.chartishere('scatter', 'scatter')

      })
  }


}









