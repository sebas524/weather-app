import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/app/environments/environment';

(mapboxgl as any).accessToken = environment.MAPBOX_KEY;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [],
})
export class MapComponent implements AfterViewInit {
  @Input() lng: number = 0;
  @Input() lat: number = 0;

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [this.lng, this.lat], // starting position [lng, lat]
      zoom: 7, // starting zoom
    });
  }
}
