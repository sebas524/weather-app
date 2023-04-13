import { Component } from '@angular/core';

@Component({
  selector: 'component-main-content-weather',
  templateUrl: './main-content-weather.component.html',
  styles: [],
})
export class MainContentWeatherComponent {
  searchCityWeather(city: string) {
    console.log('capital being searched: ', city);
  }
}