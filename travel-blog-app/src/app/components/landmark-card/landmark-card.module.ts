import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandmarkCardComponent } from './landmark-card.component';
import { RouterModule, Routes } from '@angular/router';
import { LandmarkInfoComponent } from 'src/app/pages/landmark-info/landmark-info.component';

const LandmarkRoutes: Routes = [
  {
    path: "landmark/:id",
    component: LandmarkInfoComponent
  }
]

@NgModule({
  declarations: [
    LandmarkCardComponent
  ],
  exports: [
    LandmarkCardComponent
  ],
  imports: [
    RouterModule.forChild(LandmarkRoutes),
    CommonModule
  ]
})
export class LandmarkCardModule { }
