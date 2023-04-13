import { Component } from '@angular/core';
import { MyWeatherService } from '../../services/my-weather.service';

@Component({
  selector: 'component-main-content-weather',
  templateUrl: './main-content-weather.component.html',
  styles: [],
})
export class MainContentWeatherComponent {
  // * injecting MyWeatherService:
  constructor(private myWeatherService: MyWeatherService) {}

  searchCityWeather(city: string) {
    console.log('capital being searched: ', city);

    this.myWeatherService.getWeatherByCity(city).subscribe((data) => {
      console.log('fetched info =>', data);
    });
  }
}
