import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) {}
  registerForm: FormGroup = new FormGroup({
    // first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
    // last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(9)]),
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(9),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.min(4),
      Validators.max(30),
      Validators.email,
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(19),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(19),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(13),
    ]),
  });
  submitRegister(formInfo: FormGroup) {
    console.log(formInfo.value);
    this._AuthService.register(formInfo.value).subscribe((response) => {
      console.log(response);
      if (response.message == 'success') {
        //go to login
        this._Router.navigate(['/login']);
      } else {
        this.error = response.errors.email.message;
        console.log(this.error);
      }
    });
  }
  ngOnInit(): void {}
}
