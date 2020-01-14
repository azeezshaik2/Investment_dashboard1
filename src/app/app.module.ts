import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './partials/header/header.component';
import { SearchBoxComponent } from './partials/header/search-box/search-box.component';
import { UserBoxComponent } from './partials/header/user-box/user-box.component';
import { SummaryCardsNavComponent } from './partials/summary-cards-nav/summary-cards-nav.component';

// Bootstrap Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './partials/sidebar/sidebar.component';

// chart.js
import { ChartsModule } from 'ng2-charts';
import { FeaturesComponent } from './partials/features/features.component';
import { MarketQuickLinksComponent } from './partials/market-quick-links/market-quick-links.component';
import { SuggetionsComponent } from './partials/suggetions/suggetions.component';
import { ArticlesComponent } from './partials/articles/articles.component';
import { FooterComponent } from './partials/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,
    SidebarComponent,
    SummaryCardsNavComponent,
    FeaturesComponent,
    MarketQuickLinksComponent,
    SuggetionsComponent,
    ArticlesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
