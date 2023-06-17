import { Component, OnInit } from '@angular/core';
import { MyWeatherService } from '../../services/my-weather.service';
import { List, WeatherInter } from 'src/app/interfaces/weather.interface';
import { City } from 'src/app/interfaces/weather.interface';

@Component({
  selector: 'app-weather-info-main-page',
  templateUrl: './weather-info-main-page.component.html',
  styles: [],
})
export class WeatherInfoMainPageComponent implements OnInit {
  // ! ATTRIBUTES:
  // * timeline array will hold the time and corresponding temperature for the whole day (that means, 8 different forecasts, because it is every three hours. 8*3 = 24):
  timelineForOneDay: any = [];
  weatherNow: any;
  // * current time will return time and date of laptop:
  currentTime = new Date();
  // *holds city and location
  location?: City;

  latitude?: number;
  longitude?: number;
  weatherData?: WeatherInter;
  // * for when city not found:
  showErrorMsg: boolean = false;
  errorMsg: string =
    'City name not found. Please check spelling or try another name...';

  fetched5dayWeatherData: any = [];

  // ! CONSTRUCTOR:

  constructor(private myWeatherService: MyWeatherService) {}
  // ! ON INIT:

  ngOnInit(): void {
    // * checking if geolocation is possible by browser:
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);

        // * passing in geo parameters to getWeatherByGeoLocation method:

        this.myWeatherService
          .getWeatherByGeoLocation(this.latitude, this.longitude)
          .subscribe((data) => {
            console.log('Current Position fetched data => ', data);
            this.weatherData = data;
            this.getTodayForecast(this.weatherData);

            this.getFiveDayForecast(this.weatherData.list);

            // * ! from list you get weather of every three hours
          });
      });
    } else {
      console.log('This browser does not support geolocation...');
    }

    // this.myWeatherService.getWeatherForecast().subscribe((data) => {
    //   console.log('data from ngOnInit => ', data);
    //   this.getTodayForecast(data);
    // });
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
  getTodayForecast(info: WeatherInter) {
    this.location = info.city;

    const { coord } = info.city;
    this.latitude = coord.lat;
    this.longitude = coord.lon;
    console.log('latitude => ', this.latitude);
    console.log('longitude => ', this.longitude);

    // ! list is three hour forecast:
    // * we'll look through the list and slice the data so we can get just the first 8 elements (8 elements because it has the weather for every three hours and well 8 * 3 = 24, and we are looking for *read function name):
    for (const forecast of info.list.slice(0, 8)) {
      // console.log('forecast =>', forecast);
      // * here we are pushing specific info from  list into timelineForOneDay:
      this.timelineForOneDay.push({
        time: forecast.dt_txt,
        temp: forecast.main.temp,
        icon: forecast.weather![0].icon,
        conditions: forecast.weather![0].main,
      });

      // * this const is assigned the dates provided to us by api, and then we'll change it to a timestamp:
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

  // * this is for when you manually look for a city:
  searchByCity(city: string) {
    console.log('capital being searched: ', city);

    this.myWeatherService.getWeatherByCityName(city).subscribe({
      next: (data) => {
        this.weatherData = data;

        console.log('fetched info =>', data);
        // * in order to set values to "blank" again (because they where already populated on ng on init!!!):
        // this.weatherNow = false;
        this.timelineForOneDay = [];
        this.fetched5dayWeatherData = [];

        this.getTodayForecast(this.weatherData);

        this.getFiveDayForecast(this.weatherData.list);
      },
      error: (err) => {
        return this.showErrorHandler();
      },
    });
  }

  showErrorHandler() {
    this.showErrorMsg = true;

    return setTimeout(() => {
      this.showErrorMsg = false;
    }, 2300);
  }

  getFiveDayForecast(info: List[]) {
    for (let i = 0; i < info.length; i = i + 8) {
      this.fetched5dayWeatherData.push(info[i]);
    }

    // console.log(
    //   'five day forecast array with data => ',
    //   this.fetched5dayWeatherData
    // );
  }
}
