import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { WeatherInter } from 'src/app/interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class MyWeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = environment.APIKEY;

  constructor(public http: HttpClient) {}

  // ! new way

  getWeatherByCityName(nameOfCity: string): Observable<WeatherInter> {
    const url = `${this.baseUrl}?q=${nameOfCity}&appid=${this.apiKey}&units=metric`;
    return this.http.get<WeatherInter>(url);
  }

  getWeatherByGeoLocation(lat: number, lon: number): Observable<WeatherInter> {
    const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;

    return this.http.get<WeatherInter>(url);
  }
}
