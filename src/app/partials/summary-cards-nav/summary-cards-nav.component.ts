import { Component, OnInit } from '@angular/core';
import {Color} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-summary-cards-nav',
  templateUrl: './summary-cards-nav.component.html',
  styleUrls: ['./summary-cards-nav.component.scss']
})
export class SummaryCardsNavComponent implements OnInit {

  selectedCard: string;
  datasets: any[];
  datasets2: any[];
  datasets3: any[];
  labels: any[];
  lineChartColors: Color[];
  lineChartColors2: Color[];
  lineChartColors3: Color[];
  options;
  constructor() { }

  ngOnInit() {
    this.selectedCard = 'plans';
    this.plansBarChartData();
  }

  plansBarChartData() {
  this.datasets = [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
        datalabels: {
          display: false,
        },

      }
    ];

  this.datasets2 = [
      {
        label: 'My First dataset',
        data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
        datalabels: {
          display: false,
        },

      }
    ];

  this.datasets3 = [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
        datalabels: {
          display: false,
        },

      }
    ];
  this.lineChartColors = [
      { // dark grey
        backgroundColor: 'rgba(247, 185, 36, 0.2)',
        borderColor: '#f7b924',
        borderCapStyle: 'round',
        borderDash: [],
        borderWidth: 4,
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: '#f7b924',
        pointBackgroundColor: '#fff',
        pointHoverBorderWidth: 4,
        pointRadius: 6,
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHitRadius: 10,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#f7b924',
      },
    ];

  this.lineChartColors2 = [
      { // dark grey
        backgroundColor: 'rgba(48, 177, 255, 0.2)',
        borderColor: '#30b1ff',
        borderCapStyle: 'round',
        borderDash: [],
        borderWidth: 4,
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: '#30b1ff',
        pointBackgroundColor: '#ffffff',
        pointHoverBorderWidth: 4,
        pointRadius: 6,
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHitRadius: 10,
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#30b1ff',
      },
    ];

  this.lineChartColors3 = [
      { // dark grey
        backgroundColor: 'rgba(86, 196, 121, 0.2)',
        borderColor: '#56c479',
        borderCapStyle: 'round',
        borderDash: [],
        borderWidth: 4,
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: '#56c479',
        pointBackgroundColor: '#fff',
        pointHoverBorderWidth: 4,
        pointRadius: 6,
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHitRadius: 10,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#56c479',
      },
    ];

  this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  this.options = {
      layout: {
        padding: {
          left: 0,
          right: 8,
          top: 0,
          bottom: 0
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
        }],
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    };
  }

}
