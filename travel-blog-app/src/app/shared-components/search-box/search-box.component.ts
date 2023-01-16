import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  searchQuery: string = ""

  constructor(private router: Router) { }

  search() {
    this.router.navigate(['/search'], {queryParams:{landmark:this.searchQuery}});
    this.searchQuery = ""
  }

}
