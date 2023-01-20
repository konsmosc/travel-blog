import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { LandmarkCardModule } from 'src/app/components/landmark-card/landmark-card.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';

const SearchRoutes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  }
]

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    RouterModule.forChild(SearchRoutes),
    CommonModule,
    LandmarkCardModule,
    SpinnerModule
  ]
})
export class SearchModule { }
