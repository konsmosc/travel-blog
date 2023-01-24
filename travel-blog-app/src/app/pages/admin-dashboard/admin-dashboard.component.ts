import { Component } from '@angular/core';
import { Landmark, ListLandmarksResponse } from 'src/app/interfaces/landmarks';
import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  landmarks: Landmark[] = [];
  isLoading: boolean = false;

  constructor(private landmarkService: LandmarkService){}

  ngOnInit(): void {
    this.listLandmarks()
  }

  listLandmarks(){
    this.isLoading = true;
    this.landmarkService.list().subscribe({ 
      next: (resp: ListLandmarksResponse) => {
        this.landmarks = resp.result
        this.isLoading = false;
      }
    })
  }

}
