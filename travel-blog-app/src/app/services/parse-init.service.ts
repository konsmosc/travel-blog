import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { environment } from 'src/environments/environment.development';

Parse.initialize(environment.appKey);
(Parse as any).serverURL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ParseInitService {

  constructor() { }
}
