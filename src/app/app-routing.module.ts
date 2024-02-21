import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard], component:HomeComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'gallery',canActivate:[AuthGuard],component:GalleryComponent},
  {path:'login',component:LoginComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'register',component:RegisterComponent},

  {path:'moviedetails/:id',canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:'contact',canActivate:[AuthGuard],component:ContactComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'settings',canActivate:[AuthGuard],loadChildren:()=>import('./settings/settings.module').then(x=>x.SettingsModule)},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],

exports: [RouterModule]
})
export class AppRoutingModule { }
