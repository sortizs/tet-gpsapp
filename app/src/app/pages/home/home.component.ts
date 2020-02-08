import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { LocationModel } from "src/app/entities/location";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recording = false;

  locations: LocationModel[] = [];

  constructor(private _ls: LocationService) {
    _ls.getLocations().subscribe(data => this.locations = data);
  }

  ngOnInit() {
  }

  record() {
    this.recording = !this.recording;
  }

}
