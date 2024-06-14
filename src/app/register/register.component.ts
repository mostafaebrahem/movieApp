import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string = '';
  registerError: string = '';
  emailValidation: RegExp =
    /^(?=.{1,256})(?=.{1,64}@.{1,255}$)[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  name = this.fb.control('', [Validators.required, Validators.minLength(3)]);
  email = this.fb.control('', [
    Validators.required,
    Validators.pattern(this.emailValidation),
  ]);
  phone = this.fb.control('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(13),
  ]);

  password = this.fb.control('', [
    Validators.required,
    Validators.minLength(7),
    Validators.maxLength(19),
  ]);
  rePassword = this.fb.control('');

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private fb: FormBuilder
  ) {}

  registerForm: FormGroup = new FormGroup(
    {
      name: this.name,
      email: this.email,
      password: this.password,
      rePassword: this.rePassword,
      phone: this.phone,
    },
    {
      validators: RegisterComponent.matchPassword,
    }
  );
  static matchPassword(group: AbstractControl): ValidationErrors | null {
    const pass = group.value.password;
    const rePass = group.value.rePassword;
    return pass === rePass ? null : { notMatching: true };
  }
  submitRegister(formInfo: FormGroup) {
    this._AuthService.register(formInfo.value).subscribe((response) => {
      if (response.message == 'success') {
        //go to login
        this._Router.navigate(['/login']);
      } else {
        this.error = response.errors.email.message;
        this.registerError = response.errors.email;
      }
    });
  }
  ngOnInit(): void {}
}
