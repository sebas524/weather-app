import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { WeatherApiInterface } from '../interfaces/weatherAPI.interface';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyWeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(public http: HttpClient) {}

  getWeatherByCity(city: string): Observable<WeatherApiInterface | undefined> {
    return this.http
      .get<WeatherApiInterface>(
        `${this.baseUrl}?q=${city}&appid=${environment.APIKEY}`
      )
      .pipe(
        catchError((err) => {
          return of(undefined);
        })
      );
  }
}
