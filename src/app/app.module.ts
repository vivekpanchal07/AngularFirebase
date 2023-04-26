import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAF5qmflJ83rp-VOW1WvRbnpRUsh-TTNMg",
      authDomain: "angularfirebase-2a5f6.firebaseapp.com",
      projectId: "angularfirebase-2a5f6",
      storageBucket: "angularfirebase-2a5f6.appspot.com",
      messagingSenderId: "617364485223",
      appId: "1:617364485223:web:abffc5a76db8d1a970d0c2"}
    )
  ],
  providers: [ FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
