import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  upcommingData = true;
  pastData = false;
  selectedTab: string;

  constructor() { }

  ngOnInit() {
    this.selectedTab = 'upcomming';
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
