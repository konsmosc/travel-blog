import { Component, OnInit } from '@angular/core';
import { ListLandmarksResponse, Landmark } from 'src/app/interfaces/landmarks';
import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  landmarksArray: Landmark[] = []

  constructor(private landmarkService: LandmarkService){}

  ngOnInit(): void {
    // this.listLandmarks()
  }

  listLandmarks(){
    this.landmarkService.list().subscribe((resp: ListLandmarksResponse) => {
      console.log(resp.result)
      this.landmarksArray = resp.result
    })
  }

}
