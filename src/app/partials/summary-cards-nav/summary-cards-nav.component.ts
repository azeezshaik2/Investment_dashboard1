import { Component, OnInit } from '@angular/core';
import {Color, Label} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-summary-cards-nav',
  templateUrl: './summary-cards-nav.component.html',
  styleUrls: ['./summary-cards-nav.component.scss']
})
export class SummaryCardsNavComponent implements OnInit {

  selectedCard: string;

  /*chart datasets*/
  plansBarChartDatasets: any[];
  mutualFundsLineChartDatasets: any[];
  etfLineChartDatasets: any[];
  allFundsChartDatassets: any[];
  allFundsDoughnutChartDatasets: any[];

  /*chart colors*/
  lineChartColors: Color[];
  plansBarChartColors: Color[];
  mutualFundsLineChartColors: Color[];
  etfLineChartColors: Color[];
  allFundsChartColors: Color[];
  allFundsDoughnutChartColors: Color[];


  /*chart labels*/
  plansBarChartLabels: Label[];
  mutualFundsLineChartLabels: Label[];
  etfLineChartLabels: Label[];
  allFundsChartLabels: Label[];
  allFundsDoughnutChartlabels: Label[];

  /*chart options*/
  plansBarChartOptions;
  mutualFundsLineChartOptions;
  etfLineChartOptions;
  allFundsChartOptions;
  allFundsDoughnutChartOptions;
  options;

  constructor() { }

  ngOnInit() {
    this.selectedCard = 'all-investments';
    this.allFundsDistributionData();
    this.plansBarChartData();
    this.mutualFundsLineChartData();
    this.etfLineChartData();
    this.allFundsDoughnutData();
  }

  allFundsDistributionData() {
    this.allFundsChartDatassets = [
      {
        label: 'Current Amount in Mutual Funds',
        data: [110366.89, 95461.56, 150201.11, 140125.19, 102745.89, 159914.79],
        datalabels: {
          display: false,
        },
      },
      {
        label: 'Current Amount Exchange-Traded Funds',
        data: [42568.45, 65478.12, 35604.78, 44589.42, 53123.92, 39663.42],
        datalabels: {
          display: false,
        },

      },
      {
        label: 'Current Amount in Plans',
        data: [198567.12, 225634.12, 216983.58, 234578.23, 274584.47, 305100.59],
        datalabels: {
          display: false,
        },

      }
    ];

    this.allFundsChartLabels = ['t-6', 't-5',
      't-4', 't-3', 't-2', 't-1'];
    this.allFundsChartColors = [
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
      }
    ];

    this.allFundsChartOptions = {
      layout: {
        padding: {
          left: 0,
          right: 16,
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
          },
          barPercentage: 0.8,
          categoryPercentage: 0.8
        }]
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    };
  }

  allFundsDoughnutData() {
    this.allFundsDoughnutChartDatasets = [
      {
        label: 'Beginnning Balance',
        data: [100234.65, 53687.90, 62345.00],
        datalabels: {
          display: false,
        },

      }
    ];

    this.allFundsDoughnutChartlabels = ['401(k) Plan 1', 'Deferred Compensation Plan',
      'Deferred compensation plan 2'];
    this.allFundsDoughnutChartColors = [
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
      }
    ];

    this.allFundsDoughnutChartOptions = {
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
          },
          barPercentage: 0.4
        }]
      },
      legend: {
        display: true,
        position: 'right'
      },
      cutoutPercentage: 70,
      responsive: true,
      maintainAspectRatio: false
    };
  }

  plansBarChartData() {

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
    }
    ];


  this.plansBarChartDatasets = [
      {
        label: 'Beginnning Balance',
        data: [100234.65, 53687.90, 62345.00, 20300.20],
        datalabels: {
          display: false,
        },

      },
      {
        label: 'Ending Balance',
        data: [ 134763.98, 57832.30, 88654.00, 18850.31],
        datalabels: {
          display: false,
        },

      }
    ];

  this.plansBarChartLabels = ['401(k) Plan 1', 'Deferred Compensation Plan',
      'Deferred compensation plan 2', 'Deferred Compensation Plan 3'];
  this.plansBarChartColors = [
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
    }
  ];

  this.plansBarChartOptions = {
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
          },
          barPercentage: 0.8
        }]
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    };
  }

  mutualFundsLineChartData() {

    this.mutualFundsLineChartLabels = ['ABC 500 Idx;Adm', 'ABC 100 Equity Fund',
      'Fid Magellan Fund', 'SFD L&T Idx;Ret+', 'ABC TSM Idx;Inst+', 'ABC Wellington Fund'];

    this.mutualFundsLineChartDatasets = [
    {
      label: 'Invested Amount',
      data: [28000.00, 25844.15, 19000.00, 11500.00, 13107.44, 24200.00],
      datalabels: {
        display: false,
      },

    },
      {
        label: 'Current Amount',
        data: [35787.60, 31416.15, 22281.00, 20155.60, 19292.44, 30982.00],
        datalabels: {
          display: false,
        },

      }
  ];
    this.mutualFundsLineChartColors = [
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
      }
    ];

    this.mutualFundsLineChartOptions = {
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
      maintainAspectRatio: true
    };

  }

  etfLineChartData() {
    this.etfLineChartLabels = ['ABC QQQ Series 1', 'iShares MSCI Markets ETF',
      'SPDR S&P 500 ETF', 'SPDR Gold Shares', 'ABC Core S&P 500'];

    this.etfLineChartDatasets = [
      {
        label: 'Invested Amount',
        data: [4956.18, 4289.15, 8569.89, 10900.80, 5106.44],
        datalabels: {
          display: false,
        },

      },
      {
        label: 'Current Amount',
        data: [6174.5, 5749.12, 11264.40, 9646.20, 6829.2],
        datalabels: {
          display: false,
        },

      }
    ];
    this.etfLineChartColors = [
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
      }
    ];

    this.etfLineChartOptions = {
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
            beginAtZero: false,
            min: 1000
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
      maintainAspectRatio: true
    };
  }

}
