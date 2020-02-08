import { Component, OnInit, Input } from '@angular/core';
import { LocationModel } from 'src/app/entities/location';

@Component({
  selector: 'loc-list',
  templateUrl: './loc-list.component.html',
  styleUrls: ['./loc-list.component.css']
})
export class LocListComponent implements OnInit {

  @Input()
  public locations: LocationModel[];

  constructor() {
    
  }

  ngOnInit() {
  }

}
