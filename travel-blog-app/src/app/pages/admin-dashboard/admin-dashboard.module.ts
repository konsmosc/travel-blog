import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { AdminTableModule } from 'src/app/components/admin-table/admin-table.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

const adminDashRoutes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate:[AuthGuard]
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
