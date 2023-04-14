import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImg',
})
export class WeatherImgPipe implements PipeTransform {
  transform(id: string): string {
    return `https://openweathermap.org/img/wn/${id}@2x.png`;
  }
}
