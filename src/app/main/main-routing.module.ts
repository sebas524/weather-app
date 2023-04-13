import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { WeatherInfoMainPageComponent } from './main-layout/pages/weather-info-main-page/weather-info-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'weather-info', component: WeatherInfoMainPageComponent },
      { path: '**', redirectTo: 'weather-info' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
