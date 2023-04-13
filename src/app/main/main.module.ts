import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherInfoMainPageComponent } from './main-layout/pages/weather-info-main-page/weather-info-main-page.component';
import { SidebarWeatherComponent } from './components/sidebar-weather/sidebar-weather.component';
import { MainContentWeatherComponent } from './components/main-content-weather/main-content-weather.component';

@NgModule({
  declarations: [MainLayoutComponent, WeatherInfoMainPageComponent, SidebarWeatherComponent, MainContentWeatherComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
