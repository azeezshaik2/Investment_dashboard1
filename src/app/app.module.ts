import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './partials/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBoxComponent } from './partials/header/search-box/search-box.component';
import { UserBoxComponent } from './partials/header/user-box/user-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
