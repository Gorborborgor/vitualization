import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private _router: Router, private _authService: AuthService) {}

  canLoad(route: Route): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.isAuthenticated) {
      return true;
    }

    this._router.navigate(['/auth']);
    return false;
  }

}
