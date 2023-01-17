import { Component, OnInit } from '@angular/core';
import { Landmark } from 'src/app/interfaces/landmarks';
import { LandmarkService } from 'src/app/services/landmark.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landmark-info',
  templateUrl: './landmark-info.component.html',
  styleUrls: ['./landmark-info.component.scss']
})
export class LandmarkInfoComponent implements OnInit {

  landmarkInfo: Landmark = {
    objectId: "",
    title: "",
    short_info: "",
    description: "",
    url: "",
    order: 0,
    photo: "",
    photo_thumb: "",
    location: []
  }

  constructor(private landmarkService: LandmarkService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    // this.getLandmark(id)
  }

  getLandmark(id: string | null) {
    this.landmarkService.get(id).subscribe((resp: Landmark) => {
      console.log(resp)
      this.landmarkInfo = resp
    })
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
