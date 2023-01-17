import { Component, Input } from '@angular/core';
import { Landmark } from 'src/app/interfaces/landmarks';

@Component({
  selector: 'app-landmark-card',
  templateUrl: './landmark-card.component.html',
  styleUrls: ['./landmark-card.component.scss']
})
export class LandmarkCardComponent {

  @Input('landmark') landmark: Partial<Landmark> = {}

}
