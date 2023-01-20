import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  isLogin: boolean = false;

  constructor(private router: Router,
    private location: Location) {}

  ngOnInit(): void {
    this.getUrl();
  }

  getUrl() : void {
    this.router.events.subscribe(event => {
      if (this.location.path() !== '/login') {
        this.isLogin=false
      } else {
        this.isLogin=true
      }
    })
  }
}
