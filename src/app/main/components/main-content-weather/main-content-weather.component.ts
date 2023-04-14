import { Component } from '@angular/core';
import { MyWeatherService } from '../../services/my-weather.service';
import { WeatherApiInterface } from '../../interfaces/weatherAPI.interface';

@Component({
  selector: 'component-main-content-weather',
  templateUrl: './main-content-weather.component.html',
  styles: [],
})
export class MainContentWeatherComponent {
  private fetchedWeatherInfo = {} as WeatherApiInterface | undefined;

  // * injecting MyWeatherService:
  constructor(private myWeatherService: MyWeatherService) {}

  searchCityWeather(city: string) {
    console.log('capital being searched: ', city);

    this.myWeatherService.getWeatherByCity(city).subscribe((data) => {
      console.log('fetched info =>', data);
      this.fetchedWeatherInfo = data;
    });
  }
}
