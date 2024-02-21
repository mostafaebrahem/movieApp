import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'profile',component:ProfileComponent},
  {path:'password',component:PasswordComponent},
  {path:'log',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SettingsRoutingModule { }
