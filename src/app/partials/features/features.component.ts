import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  upcommingData = true;
  pastData = false;
  selectedTab: string;
  trendingData: any;
  timelineData: any;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.selectedTab = 'upcomming';
    this.getTrendingFundData();
    this.getTimeLineData();
  }

  getTrendingFundData() {
    this.rest.getRestData('trendingfunds').subscribe(data => this.trendingData = data.trendingFunds);
  }

  getTimeLineData() {
    this.rest.getRestData('timelineData').subscribe(data => this.timelineData = data);
  }

  showUpcommingData() {
    this.selectedTab = 'upcomming';
    this.pastData = false;
    this.upcommingData = true;
  }

  previousData() {
    this.selectedTab = 'previousData';
    this.pastData = true;
    this.upcommingData = false;
  }
}
