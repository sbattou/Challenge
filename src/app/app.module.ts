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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBy-3Buf51nPS9QZHRAu0TsIbhqm3-3Eac",
  authDomain: "challenge-14008.firebaseapp.com",
  databaseURL: "https://challenge-14008.firebaseio.com",
  projectId: "challenge-14008",
  storageBucket: "challenge-14008.appspot.com",
  messagingSenderId: "418077387186"
};

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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    RestProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
