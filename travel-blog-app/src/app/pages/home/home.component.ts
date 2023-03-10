import { Component, OnInit } from '@angular/core';
import { ListLandmarksResponse, Landmark } from 'src/app/interfaces/landmarks';
import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  landmarksArray: Landmark[] = [];
  isLoading: boolean = false;

  constructor(private landmarkService: LandmarkService){}

  ngOnInit(): void {
    this.listLandmarks()
  }

  listLandmarks(){
    this.isLoading = true;
    this.landmarkService.list().subscribe({ 
      next: (resp: ListLandmarksResponse) => {
        this.landmarksArray = resp.result
        this.isLoading = false;
      }
    })
  }

}
