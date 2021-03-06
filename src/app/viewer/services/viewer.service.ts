import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Panorama } from '../models/panorama.model';

@Injectable({
  providedIn: 'root',
})
export class ViewerService {
  // // Just an example to load
  default: Panorama = {
    id: 1,
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.86112472, 45.7703275378],
    },
    properties: {
      image:
        'http://192.168.0.147/pcrs/MdL/Photos_360/2019-12-31/stream_00007-000000_10898_0053352.jpg',
      direction: 76.775588,
      timestamp: 1577802485197,
    },
  };

  private subject = new BehaviorSubject<Panorama>(null);
  private rotation = new Subject<number>();

  constructor() {}

  loadPanorama(panorama: Panorama): void {
    this.subject.next(panorama);
  }

  getPanorama(): Observable<Panorama> {
    return this.subject.asObservable();
  }

  loadRotation(yaw: number): void {
    this.rotation.next(yaw);
  }

  getRotation(): Observable<number> {
    return this.rotation.asObservable();
  }
}
