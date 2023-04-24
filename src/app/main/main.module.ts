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

@NgModule({
  declarations: [
    MainLayoutComponent,
    WeatherInfoMainPageComponent,
    WeatherImgPipe,
    AboutPageComponent,
    ContactPageComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule, HttpClientModule],
})
export class MainModule {}
