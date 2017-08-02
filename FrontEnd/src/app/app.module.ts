import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DetailKamarComponent } from './detail-kamar/detail-kamar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    MakeReservationComponent,
    UserSignupComponent,
    UserLoginComponent,
    DetailKamarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
