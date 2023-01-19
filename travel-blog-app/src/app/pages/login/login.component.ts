import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  isLoggedIn: boolean = false;
  errorMessage: string = "";
  
  form: any = {
    username: null,
    password: null
  };

  constructor(
    private authService: AuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated()
    if(this.isLoggedIn){
      this.route.navigate(['/home'])
    }
  }

  onSubmit() {
    const { username, password } = this.form;
    console.log(this.form)
    // const user = Parse.User.current();
    // const userObj = user?.toJSON()
    // console.log("user", user)
    // console.log("UserObj", userObj)

    this.authService.login(username, password).then((user) => {
      console.log(user)
      this.route.navigate(['/home'])
    }).catch((e) => {
      this.form = {}
      this.errorMessage = e.message;
    })
  }

}
