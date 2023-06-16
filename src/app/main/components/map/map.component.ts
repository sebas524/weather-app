import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/app/environments/environment';

(mapboxgl as any).accessToken = environment.MAPBOX_KEY;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [],
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
