import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input('title') title: string = '';
  @Input('type') type: string = '';
  @Input('msg') message: string = '';

}
