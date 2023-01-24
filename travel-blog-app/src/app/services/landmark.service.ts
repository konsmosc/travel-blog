import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Landmark, ListLandmarksResponse } from '../interfaces/landmarks';
import * as Parse from 'parse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  private baseUrl: string = environment.baseUrl
  private APP_KEY: string = environment.appKey

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
  async update(id: string, data: any) {
    try{
      const query = new Parse.Query("Landmark")
      const landmark = await query.get(id)
      if(!landmark){
        return undefined
      }
      for(let i in data){
        if(data[i] != null){
          landmark.set(i, data[i])
        }
      }
      return await landmark.save()

    }catch(error: any){
      throw new Error(error)
    }
  }

}
