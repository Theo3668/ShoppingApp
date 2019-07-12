import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD1wSKihP_k6Afv6CA_emUXZrILf7BeHhg",
  authDomain: "shoppingapp-fc550.firebaseapp.com",
  databaseURL: "https://shoppingapp-fc550.firebaseio.com",
  projectId: "shoppingapp-fc550",
  storageBucket: "",
  messagingSenderId: "813115390163",
  appId: "1:813115390163:web:c891ce89ec169318"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
