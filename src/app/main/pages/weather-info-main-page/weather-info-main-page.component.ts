import { Component } from '@angular/core';
import { MyWeatherService } from '../../services/my-weather.service';
import { WeatherApiInterface } from 'src/app/main/interfaces/weatherAPI.interface';

@Component({
  selector: 'app-weather-info-main-page',
  templateUrl: './weather-info-main-page.component.html',
  styles: [],
})
export class WeatherInfoMainPageComponent {
  private fetchedWeatherInfo = {} as WeatherApiInterface | undefined;

  // * injecting MyWeatherService:
  constructor(private MyWeatherService: MyWeatherService) {}

  searchCityWeather(city: string) {
    console.log('capital being searched: ', city);

    this.MyWeatherService.getWeatherByCity(city).subscribe((data) => {
      console.log('fetched info =>', data);
      this.fetchedWeatherInfo = data;
    });
  }
}
