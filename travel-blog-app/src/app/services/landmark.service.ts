import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Landmark, ListLandmarksResponse } from '../interfaces/landmarks';

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

}
