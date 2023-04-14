import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { WeatherApiInterface } from '../interfaces/weatherAPI.interface';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyWeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(public http: HttpClient) {}

  getWeatherByCity(city: string): Observable<WeatherApiInterface | undefined> {
    const type: string = 'weather';
    return this.http
      .get<WeatherApiInterface>(
        `${this.baseUrl}/${type}?q=${city}&appid=${environment.APIKEY}`
      )
      .pipe(
        catchError((err) => {
          return of(undefined);
        })
      );
  }

  getFiveDayForecast(city: string) {
    const type: string = 'forecast';
    return this.http
      .get<WeatherApiInterface>(
        `${this.baseUrl}/${type}?q=${city}&appid=${environment.APIKEY}`
      )
      .pipe(
        catchError((err) => {
          return of(undefined);
        })
      );
  }
}
