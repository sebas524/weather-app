import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [],
})
export class NavBarComponent {
  constructor(private router: Router) {}
}
