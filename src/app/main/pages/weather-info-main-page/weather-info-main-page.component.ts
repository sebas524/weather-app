import { Component, OnInit } from '@angular/core';
import { MyWeatherService } from '../../services/my-weather.service';
import { WeatherApiInterface } from 'src/app/main/interfaces/weatherAPI.interface';

@Component({
  selector: 'app-weather-info-main-page',
  templateUrl: './weather-info-main-page.component.html',
  styles: [],
})
export class WeatherInfoMainPageComponent implements OnInit {
  // public fetchedWeatherInfo?: WeatherApiInterface;
  // public imgNum: string = '10';
  // public iconUrl: string = `https://openweathermap.org/img/wn/${this.imgNum}d@2x.png`;

  // ! ATTRIBUTES:
  // * timeline array will hold the time and corresponding temperature for the whole day (that means, 8 different forecasts, because it is every three hours. 8*3 = 24):
  timeline: any = [];
  weatherNow: any;
  // * current time will return time and date of laptop:
  currentTime = new Date();
  // *holds city and location
  location: any;

  // ! CONSTRUCTOR:

  constructor(private forecastService: MyWeatherService) {}
  // ! ON INIT:

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe((data) => {
      console.log('data from ngOnInit => ', data);
      this.getTodayForecast(data);
    });
  }
  // ! METHODS:

  // * to compare:
  dateRange() {
    // * it will always return a range between 2 dates, that have a difference of 3 hours -1sec: 2:59
    const start = new Date();
    // ? error that i did not get:
    start.setHours(start.getHours() + start.getTimezoneOffset() / 60);
    // ? --------

    const to = new Date(start);
    to.setHours(to.getHours() + 2, to.getMinutes() + 59, to.getSeconds() + 59);
    return { start, to };
  }

  // *the following method is to get the data stored in ngOnInit, it is then called inside the init with data passed in as parameter:
  getTodayForecast(today: any) {
    this.location = today.city;
    // * we'll look through list and slice the data so we can get just the first 8 elements:
    for (const forecast of today.list.slice(0, 8)) {
      console.log(forecast);
      this.timeline.push({
        time: forecast.dt_txt,
        temp: forecast.main.temp,
        icon: forecast.weather![0].icon,
        conditions: forecast.weather![0].main,
      });

      // * this const will be assign to it the dates provided to us by api, and then we'll change it to a timestamp:
      const apiDate = new Date(forecast.dt_txt).getTime();

      // * if our time(within our current computer time) is within 3 hours of the time provided by us by the api
      if (
        this.dateRange().start.getTime() <= apiDate &&
        this.dateRange().to.getTime() >= apiDate
      ) {
        // * if these two conditions satisfy, then we will assign data to property called weatherNow(line 13):
        this.weatherNow = forecast;
        console.log('weather now => ', this.weatherNow);
      }
    }
  }

  searchCityWeather(city: string) {
    console.log('capital being searched: ', city);

    // this.MyWeatherService.getWeatherByCity(city).subscribe((data) => {
    //   console.log('fetched info =>', data);
    //   this.fetchedWeatherInfo = data;
    // });
  }

  // searchCityWeather(city: string) {
  //   console.log('capital being searched: ', city);

  //   this.MyWeatherService.getWeatherByCity(city).subscribe((data) => {
  //     console.log('fetched info =>', data);
  //     this.fetchedWeatherInfo = data;
  //   });
  // }
}
