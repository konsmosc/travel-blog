import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Landmark, ListLandmarksResponse } from 'src/app/interfaces/landmarks';
import { LandmarkService } from 'src/app/services/landmark.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  landmarkTitle: string = ""
  searchLandmarksArray: Landmark[] = []

  constructor(
    private route: ActivatedRoute,
    private landmarkService: LandmarkService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.landmarkTitle = params['landmark']
        console.log(this.landmarkTitle);
        this.searchForLandmarks(this.landmarkTitle)
      })
  }

  searchForLandmarks(title: string) {
    this.landmarkService.searchLandmark(title).subscribe((resp: ListLandmarksResponse) => {
      console.log(resp)
      this.searchLandmarksArray = resp.result
    })
  }

}
