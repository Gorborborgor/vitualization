import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this._authService.isAuthenticated = true;
    this._router.navigate(['/admin/home']);
  }
}
