import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LocationModel } from "../entities/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url: string;
  private token: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api/Location';

    this.token = `Bearer ${localStorage.getItem('token')}`;
  }

  getLocations(): Observable<LocationModel[]> {
    const locations = this.http.get(this.url).pipe(
      map((data: LocationModel[]) => data)
    );

    return locations;
  }
}
