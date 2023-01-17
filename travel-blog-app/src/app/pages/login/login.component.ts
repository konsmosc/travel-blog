import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };

  constructor(private authService: AuthService) { }

  onSubmit() {
    const { username, password } = this.form;
    console.log(this.form)
    this.authService.login(username, password)

    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });
  }

}
