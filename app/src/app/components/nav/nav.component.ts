import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged = false;

  constructor(private _r: Router) {
    
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLogged = false;
    this._r.navigateByUrl('login');
  }

}
