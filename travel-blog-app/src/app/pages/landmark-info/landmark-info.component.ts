import { Component, OnInit } from '@angular/core';
import { Landmark } from 'src/app/interfaces/landmarks';
import { LandmarkService } from 'src/app/services/landmark.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as Parse from 'parse'; 
import { FormGroup, FormControl } from '@angular/forms';

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
  isLoading: boolean = false;
  updateForm = new FormGroup({
    short_info: new FormControl(''),
    description: new FormControl('')
  });
  alert: any = {};
  showAlert: boolean = false;

  constructor(
    private landmarkService: LandmarkService, 
    private route: ActivatedRoute,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    if(id){
      this.getLandmark(id)
    }
    this.hasPermissions()
  }

  getLandmark(id: string) {
    this.isLoading = true
    this.landmarkService.get(id).subscribe({
      next: (res: Landmark) => {
        console.log(res)
        this.landmarkInfo = res
        this.initForms(res)
        this.isLoading = false
      },
      error: (e: any) => {
        console.log(e)
        this.showAlert = true
        this.alert = {
          title: "Error",
          type: "alert-danger",
          msg: e.error.error
        }
      }
    })
  }

  goToImage(url: string){
    window.open(url, "_blank");
  }

  hasPermissions() {
    const isLoggedIn = this.authService.isAuthenticated();
    if(isLoggedIn){
      const user = Parse.User.current()?.toJSON()
      console.log(user)
      if(user){
        const permissions = this.authService.getPermissions(user?.objectId);
        if(permissions && permissions.write){
          this.hasWritePermissions = true
        }else {
          this.hasWritePermissions = false
        }
      }
    }
  }

  initForms(lan: Landmark) {
    this.updateForm = new FormGroup({
      short_info: new FormControl(lan['short_info']),
      description: new FormControl(lan['description'])
    })
  }

  updateLandmark() {
    this.landmarkService.update(this.landmarkInfo.objectId, this.updateForm.value).then((res) => {
      console.log(res)
      this.getLandmark(this.landmarkInfo.objectId);
    }).catch((e) => {
      this.alert = {
        title: "Error",
        type: "alert-danger",
        msg: e.error.error
      }
    })
  }

}
