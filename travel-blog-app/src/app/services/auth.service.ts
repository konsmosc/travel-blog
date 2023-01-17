import { Injectable } from '@angular/core';
import * as Parse from 'parse';

Parse.initialize("NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi");
(Parse as any).serverURL = 'http://localhost:5000/parse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
   
    Parse.User.logIn(username, password).then((user) => {
      console.log(user)
    }, (error) => {
      console.log(error.message)
    })
  }
}
