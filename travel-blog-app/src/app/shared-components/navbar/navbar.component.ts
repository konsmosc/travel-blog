import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.authService.isUserAuth.subscribe((isAuth) => {
      this.isLoggedIn = isAuth || this.authService.isAuthenticated();
    });
  }

  async logout() {
    await this.authService.logout()
    this.isLoggedIn = false
    this.route.navigate(['/login'])
  }

}
