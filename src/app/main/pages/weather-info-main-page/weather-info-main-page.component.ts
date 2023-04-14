import { Component } from '@angular/core';
import { MyWeatherService } from '../../services/my-weather.service';
import { WeatherApiInterface } from 'src/app/main/interfaces/weatherAPI.interface';

@Component({
  selector: 'app-weather-info-main-page',
  templateUrl: './weather-info-main-page.component.html',
  styles: [],
})
export class WeatherInfoMainPageComponent {
  public fetchedWeatherInfo?: WeatherApiInterface;
  public imgNum: string = '10';
  public iconUrl: string = `https://openweathermap.org/img/wn/${this.imgNum}d@2x.png`;

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
