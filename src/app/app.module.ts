import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AttractionsPage } from '../pages/attractions/attractions';
import { ShowAttractionsPage } from '../pages/show-attractions/show-attractions';
import { AddAttractionsPage } from '../pages/add-attractions/add-attractions';
import { EditAttractionsPage } from '../pages/edit-attractions/edit-attractions';

// import { FIREBASE_CONFIG } from './firebase.credentials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AttractionsPage,
    ShowAttractionsPage,
    AddAttractionsPage,
    EditAttractionsPage,
    // AngularFireModule.initializeApp(FIREBASE_CONFIG),
    // AngularFireDatabaseModule,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AttractionsPage,
    ShowAttractionsPage,
    AddAttractionsPage,
    EditAttractionsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
