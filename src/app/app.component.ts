import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyABkOU8cpF67IFDJmSKAm4LHUANVrKEmvY",
  authDomain: "gamezone-fa93d.firebaseapp.com",
  databaseURL: "https://gamezone-fa93d.firebaseio.com",
  projectId: "gamezone-fa93d",
  storageBucket: "gamezone-fa93d.appspot.com",
  messagingSenderId: "1037648408876",
  appId: "1:1037648408876:web:22f3f5f101699d1a"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(config)
  }

}
