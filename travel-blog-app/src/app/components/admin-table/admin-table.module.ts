import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableComponent } from './admin-table.component';
import { RouterModule, Routes } from '@angular/router';
import { LandmarkInfoComponent } from 'src/app/pages/landmark-info/landmark-info.component';

const tableRoutes: Routes = [
  {
    path: "landmark/:id",
    component: LandmarkInfoComponent
  }
]



@NgModule({
  declarations: [AdminTableComponent],
  exports: [AdminTableComponent],
  imports: [
    RouterModule.forChild(tableRoutes),
    CommonModule
  ]
})
export class AdminTableModule { }
