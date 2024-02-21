import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _AuthService:AuthService){
   
   //////////// logout after 5 seconds //////////////////
   
    // this._AuthService.userData.subscribe(()=>{
    //   if(this._AuthService.userData!=null){
    //     setTimeout(()=>{
    //       this._AuthService.logout();
    //     },10000)
    //   }
    // })
  }
}
