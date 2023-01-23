import { Component, Input } from '@angular/core';
import { Landmark } from 'src/app/interfaces/landmarks';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent {

  @Input('landmarks') landmarks: Landmark[] = [];

}
