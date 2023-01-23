import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  isLoggedIn: boolean = false;
  errorMessage: string = "";
  loginForm: FormGroup | any;

  constructor(
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.isLoggedIn = this.authService.isAuthenticated()
    if(this.isLoggedIn){
      this.route.navigate(['/admin-dashboard'])
    }
  }

  initForms() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if(this.loginForm.valid){
      this.authService.login(username, password).then((user) => {
        console.log(user)
        if(user != undefined){
          this.route.navigate(['/admin-dashboard'])
        }
      }).catch((e) => {
        this.onReset();
        this.errorMessage = e.message;
      })
    }
  }

  onReset(): void {
    this.loginForm.reset();
  }

  isFieldInvalid(field: string) {
    return !this.loginForm.get(field).valid;
  }

}