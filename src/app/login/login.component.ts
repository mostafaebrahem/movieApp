import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:any;
  
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.min(4),Validators.max(30),Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(19)]),
  });
  submitLogin(formInfo:FormGroup){
    
    this._AuthService.login(formInfo.value).subscribe((response)=>{
      console.log(response);
      if(response.message=='success'){
        //wadih ll home
        localStorage.setItem('userToken',response.token);
        this._AuthService.setUserData();
        this._Router.navigate(['/home']);
        
      }
      else{
        this.error=response.message;
        console.log('error',this.error)
      
      }
    })
  
  }
  ngOnInit(): void {
  }

}
