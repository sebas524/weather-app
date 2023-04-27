import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styles: [],
})
export class MainCardComponent {
  @Input() weatherNow: any;
}
