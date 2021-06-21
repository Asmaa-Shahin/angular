import { HomeHeaderComponent } from './home-header/home-header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PepoleComponent } from './pepole/pepole.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailsComponent } from './movie-details/movie-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NetworkComponent,
    RegisterComponent,
    TvComponent,
    LoginComponent,
    AboutComponent,
    PepoleComponent,
    MoviesComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeHeaderComponent,
    MovieDetailsComponent,
    

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
