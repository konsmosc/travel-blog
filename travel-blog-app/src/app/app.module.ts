import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { SearchBoxComponent } from './shared-components/search-box/search-box.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LandmarkInfoComponent } from './pages/landmark-info/landmark-info.component';
import { HomeModule } from './pages/home/home.module';
import { SearchModule } from './pages/search/search.module';
import { SpinnerModule } from './components/spinner/spinner.module';
import { ParseInitService } from './services/parse-init.service';
import { AlertModule } from './components/alert/alert.module';
import { AdminDashboardModule } from './pages/admin-dashboard/admin-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SearchBoxComponent,
    LoginComponent,
    LandmarkInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    SearchModule,
    AdminDashboardModule,
    AppRoutingModule,
    SpinnerModule,
    AlertModule
  ],
  providers: [ParseInitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
