import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home-page';
import { NavbarComponent } from './components/navbar/navbar-instant';
import { FooterComponent } from './components/footer/footer-instant';
import { LoginComponent } from './components/login/login-page';
import { AboutComponent } from './components/about/about-page';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
