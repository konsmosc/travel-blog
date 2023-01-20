import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Landmark, ListLandmarksResponse } from '../interfaces/landmarks';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  private baseUrl: string = "http://localhost:5000/parse"
  private APP_KEY: string = "NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi"

  constructor(private http: HttpClient) { }

  // uses REST API + cloud function
  searchLandmark(title: string): Observable<ListLandmarksResponse> {
    return this.http.post<ListLandmarksResponse>(this.baseUrl + "/functions/search", {title: title}, {
      headers: {
        'X-Parse-Application-Id': this.APP_KEY
      }
    })
    
  }

  // uses REST API
  get(id: string | null): Observable<Landmark> {
    return this.http.get<Landmark>(this.baseUrl + "/classes/Landmark/" + id, {
      headers: {
        'X-Parse-Application-Id': this.APP_KEY
      }
    })
  }

  // uses REST API + cloud function
  list(): Observable<ListLandmarksResponse> {
    return this.http.post<ListLandmarksResponse>(this.baseUrl + "/functions/landmarks", null, {
      headers: {
        'X-Parse-Application-Id': this.APP_KEY
      }
    })
  }

  // uses the parse-sdk
  async update(id: string, sessionToken: string, short_info?: string, description?: string) {
    const query = new Parse.Query("Landmark")
    query.get(id).then((landmark) => {
      if(short_info){
        landmark.set("short_info", short_info)
      }
      if(description){
        landmark.set("description", description)
      }
      landmark.set("sessionToken", sessionToken)
      console.log(landmark)
      
      landmark.save().then((updatedLandmark) => {
        return updatedLandmark
      }, (err) => {
        console.log(err.message)
      })

    })
  }

}
