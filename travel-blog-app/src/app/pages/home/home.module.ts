import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { LandmarkCardModule } from 'src/app/components/landmark-card/landmark-card.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';

const HomeRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent
  }
] 

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule,
    LandmarkCardModule,
    SpinnerModule
  ]
})
export class HomeModule { }
