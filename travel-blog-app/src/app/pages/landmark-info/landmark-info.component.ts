import { Component, OnInit } from '@angular/core';
import { Landmark } from 'src/app/interfaces/landmarks';
import { LandmarkService } from 'src/app/services/landmark.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as Parse from 'parse'; 

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

  hasWritePermissions: boolean = false;

  constructor(
    private landmarkService: LandmarkService, 
    private route: ActivatedRoute,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.hasPermissions()
    this.getLandmark(id)
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

  hasPermissions() {
    const isLoggedIn = this.authService.isAuthenticated();
    if(isLoggedIn){
      const user = Parse.User.current()?.toJSON()
      if(user){
        const permissions = this.authService.getPermissions(user?.objectId);
        if(permissions){
          if(permissions.write && permissions.write == true){
            this.hasWritePermissions = true
          }
        }
      }
    }
  }

  updateLandmark() {
    const sessionToken = this.authService.getSessionToken();
    if(sessionToken){
      this.landmarkService.update(this.landmarkInfo.objectId, sessionToken).then((res) => {
        console.log(res)
      })
    }
  }

}
