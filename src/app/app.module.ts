import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ContactComponent } from './contact/contact.component';
import { TvComponent } from './tv/tv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    LoginComponent,
    MoviesComponent,
    NavbarComponent,
    RegisterComponent,
    NotfoundComponent,
    AboutComponent,
    MoviedetailsComponent,
    ContactComponent,
    TvComponent,
    HeaderComponent,
    
   
  ],
  imports: [


    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule,

    BrowserAnimationsModule,
    CarouselModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
