import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { SearchBoxComponent } from './shared-components/search-box/search-box.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LandmarkDetailsComponent } from './components/landmark-details/landmark-details.component';
import { LandmarkInfoComponent } from './pages/landmark-info/landmark-info.component';
import { HomeModule } from './pages/home/home.module';
import { SearchModule } from './pages/search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SearchBoxComponent,
    LoginComponent,
    LandmarkDetailsComponent,
    LandmarkInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    SearchModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
