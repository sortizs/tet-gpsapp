import { Component, OnInit, Input } from '@angular/core';
import { LocationModel } from 'src/app/entities/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  public locations: LocationModel[];

  public lat = 6.183393;
  public lng = -75.585855;

  constructor() { }

  ngOnInit() {
  }

}
