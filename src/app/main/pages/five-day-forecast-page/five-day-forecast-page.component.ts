import { Component, OnInit } from '@angular/core';
import { MyWeatherService } from '../../services/my-weather.service';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-five-day-forecast-page',
  templateUrl: './five-day-forecast-page.component.html',
  styles: [],
})
export class FiveDayForecastPageComponent implements OnInit {
  fetched5dayWeatherData: any = [];

  constructor(private myWeatheatherService: MyWeatherService) {}
  ngOnInit(): void {
    this.myWeatheatherService
      .getWeatherForecast()
      .pipe(pluck('list'))
      .subscribe((data) => {
        this.getFiveDayForecast(data);
      });
  }

  getFiveDayForecast(info: any) {
    for (let i = 0; i < info.length; i = i + 8) {
      this.fetched5dayWeatherData.push(info[i]);
    }

    console.log(
      'five day forecast array with data => ',
      this.fetched5dayWeatherData
    );
  }
}
