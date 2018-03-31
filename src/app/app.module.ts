import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DisplayPage } from '../pages/display/display';
import {RegisterPage} from "../pages/register/register";
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import {HomePage} from "../pages/home/home";


@NgModule({
  declarations: [
    MyApp,
    DisplayPage,
    RegisterPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DisplayPage,
    RegisterPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
