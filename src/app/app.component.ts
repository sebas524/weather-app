import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public temp: number = 10;

  searchByCountry(keyword: string): void {
    console.log('from by capital search => ', keyword);
  }
}
