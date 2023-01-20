import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { BehaviorSubject } from 'rxjs';

Parse.initialize("NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi");
(Parse as any).serverURL = 'http://localhost:5000/parse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth = new BehaviorSubject<boolean>(false);

  get isUserAuth() {
    return this.userAuth.asObservable();
  }

  constructor() { }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      Parse.User.logIn(username, password).then((res) => {
        this.userAuth.next(true);
        resolve(res)
      }).catch((e) => {
        reject(e)
      })
    });
  }

  async logout() {
    this.userAuth.next(false);
    return await Parse.User.logOut();
  }

  isAuthenticated() {
    const user = Parse.User.current();
    if(user) {
      return user.authenticated();
    }
    return false
  }

  getRole(user: Parse.User) {
    new Parse.Query(Parse.Role).equalTo("users", user).first().then((res) => {
      if(res) {
        return res.getName();
      }
      return undefined;
    }).catch((err) => {
      throw new Error(err.message);
    })
  }

  getSessionToken() {
    return Parse.User.current()?.getSessionToken();
  }

  getPermissions(userId: string) {
    const policy = Parse.User.current()?.getACL()?.toJSON();
    if(policy){
      return policy[userId];
    }
    return policy["*"];
    // second way using Parse Access Control List
    // const acl = new Parse.ACL(Parse.User.current());
    // const writePerms = acl.getWriteAccess(userId)
    // const readPerms = acl.getReadAccess(userId)
    // return {
    //   read: readPerms,
    //   write: writePerms
    // }
  }


}
