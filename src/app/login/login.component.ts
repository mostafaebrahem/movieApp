import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: any = '';
  email = this.fb.control('', [
    Validators.required,
    Validators.min(4),
    Validators.max(30),
    Validators.email,
  ]);
  password = this.fb.control('', [
    Validators.required,
    Validators.minLength(7),
    Validators.maxLength(19),
  ]);
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private fb: FormBuilder
  ) {}
  loginForm: FormGroup = this.fb.group({
    email: this.email,
    password: this.password,
  });
  submitLogin(formInfo: FormGroup) {
    this._AuthService.login(formInfo.value).subscribe(
      (response) => {
        if (response.message == 'success') {
          //go to home
          localStorage.setItem('userToken', response.token);
          this._AuthService.setUserData();
          this._Router.navigate(['/home']);
        }
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
