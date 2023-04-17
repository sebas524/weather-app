import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { WeatherApiInterface } from '../interfaces/weatherAPI.interface';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyWeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(public http: HttpClient) {}

  // * method to generate weather
  getWeatherForecast() {
    return new Observable((observer) => {
      // * The Geolocation.getCurrentPosition() method is used to get the current position of the device.
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // * position here will return the coordinates.
          observer.next(position);
        },
        (err) => {
          observer.next(err);
        }
      );
    }).pipe(
      // * in map we transform data. we need to append query parameters.
      map((val: any) => {
        // * remember you have already seen httpParams with fer!
        return new HttpParams()
          .set('lon', val.coords.longitude)
          .set('lat', val.coords.latitude)
          .set('units', 'metric')
          .set('appid', 'bb3a234039078f99acd82d0fce2f1c34');
      }),
      // * switchMap will be used to fetch the data and pass it to the get method of the http:
      switchMap((values) => {
        return this.http.get(
          'https://api.openweathermap.org/data/2.5/forecast',
          { params: values }
        );
      })
    );
  }

  // !METHOD X
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

  // getFiveDayForecast(city: string) {
  //   const type: string = 'forecast';
  //   return this.http
  //     .get<WeatherApiInterface>(
  //       `${this.baseUrl}/${type}?q=${city}&appid=${environment.APIKEY}`
  //     )
  //     .pipe(
  //       catchError((err) => {
  //         return of(undefined);
  //       })
  //     );
  // }
}
