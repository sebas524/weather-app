import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherInfoMainPageComponent } from './pages/weather-info-main-page/weather-info-main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherImgPipe } from './pipes/weather-img.pipe';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { ThreeDayForecastComponent } from './components/three-day-forecast/three-day-forecast.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    WeatherInfoMainPageComponent,
    WeatherImgPipe,
    AboutPageComponent,
    ContactPageComponent,
    MainCardComponent,
    ThreeDayForecastComponent,
    FiveDayForecastComponent,
    MapComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule, HttpClientModule],
})
export class MainModule {}
