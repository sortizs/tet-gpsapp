import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: UserService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }

}
