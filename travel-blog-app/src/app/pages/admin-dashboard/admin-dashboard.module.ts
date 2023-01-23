import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { AdminTableModule } from 'src/app/components/admin-table/admin-table.module';
import { RouterModule, Routes } from '@angular/router';

const adminDashRoutes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  }
] 

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    RouterModule.forChild(adminDashRoutes),
    CommonModule,
    SpinnerModule,
    AdminTableModule
  ]
})
export class AdminDashboardModule { }
