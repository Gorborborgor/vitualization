import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputType } from 'src/app/models/enums/input-type.enum';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly InputType: typeof InputType = InputType;
  password: string;
  passwordControl: FormControl;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.passwordControl = new FormControl('', [Validators.required]);
  }

  onLogin(): void {
    if(this.passwordControl.invalid) {
      this.passwordControl.markAsTouched()
      return;
    }
    this._authService.login(this.passwordControl.value).subscribe((res) => {
      if(res) {
        this._router.navigate(['/admin/home']);
        return;
      }
      console.log('wrong password');
      this.passwordControl.setErrors({'wrongPassword': true})
    })
  }
}
