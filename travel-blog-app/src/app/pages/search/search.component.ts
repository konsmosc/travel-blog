import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Landmarks } from 'src/app/interfaces/landmarks';
// import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  landmarkTitle: string = ""
  listOfLandmarks: Landmarks[] = []

  constructor(
    private route: ActivatedRoute,
    // private landmarkService: LandmarkService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.landmarkTitle = params['landmark']
        console.log(this.landmarkTitle);
        this.searchLandmarks(this.landmarkTitle)
      })
  }

  searchLandmarks(title: string) {
    console.log(title)
  }

}
