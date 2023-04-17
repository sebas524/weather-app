import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { WeatherInfoMainPageComponent } from './pages/weather-info-main-page/weather-info-main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'weather-info', component: WeatherInfoMainPageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },

      { path: '**', redirectTo: 'weather-info' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
