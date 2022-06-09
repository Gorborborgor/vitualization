import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  password: string = 'makdufftan';
  isAuthenticated: boolean = false;

  constructor() { }

  login(input: string): Observable<boolean> {
    if(input === this.password) {
      this.isAuthenticated = true
      return of(true);
    }
    return of(false);
  }

}
