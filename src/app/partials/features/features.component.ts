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
  customData = false;
  selectedTab: string;
  newsFeedData: any;
  timelineData: any;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.selectedTab = 'upcomming';
    this.getNewsFeedData();
    this.getTimeLineData();
  }

  getNewsFeedData() {
    this.rest.getRestData('newsFeedData').subscribe(data => this.newsFeedData = data.newReleases);
  }

  getTimeLineData() {
    this.rest.getRestData('timelineData').subscribe(data => this.timelineData = data);
  }

  showCustomData() {
    this.selectedTab = 'customData';
    this.pastData = false;
    this.upcommingData = true;

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
