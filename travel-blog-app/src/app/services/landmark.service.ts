import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  private baseUrl: string = "http://localhost:5000/parse"

  constructor(private http: HttpClient) { }

  searchLandmark(title: string){
    
  }

  get(id: string){

  }

  list(){

  }

}
