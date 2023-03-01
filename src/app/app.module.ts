import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compnents/home/home.component';
import { LoginComponent } from './compnents/login/login.component';
import { AboutComponent } from './compnents/about/about.component';
import { NavComponent } from './compnents/nav/nav.component';
import { ImgSliderComponent } from './compnents/img-slider/img-slider.component';
import { CardViewComponent } from './compnents/card-view/card-view.component';
import { GameMgmtComponent } from './compnents/game-mgmt/game-mgmt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    NavComponent,
    ImgSliderComponent,
    CardViewComponent,
    GameMgmtComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
