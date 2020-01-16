import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-suggetions',
  templateUrl: './suggetions.component.html',
  styleUrls: ['./suggetions.component.scss']
})
export class SuggetionsComponent implements OnInit {


  trendingData: any;
  wishlistedData: any;
  recommendedData: any;
  trendingDataFlag = true;
  recommendedDataFlag = false;
  selectedTab: string;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.selectedTab = 'trendingData';
    this.getTrendingFundData();
  }

  getTrendingFundData() {
    this.rest.getRestData('trendingfunds').subscribe(data => {
      this.trendingData = data.trendingFunds;
      this.wishlistedData = data.wishlistedFunds;
      this.recommendedData = data.recommendedFunds;
    });
  }

  showTrendingFunds() {
    this.selectedTab = 'trendingData';
    this.trendingDataFlag = true;
    this.recommendedDataFlag = false;
  }

  showRecommendedFunds() {
    this.selectedTab = 'recommendedData';
    this.trendingDataFlag = false;
    this.recommendedDataFlag = true;
  }

}
