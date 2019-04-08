import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsViewComponent } from './rooms-view/rooms-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserBadgeComponent } from './user-badge/user-badge.component';
import { BackToRoomsComponent } from './back-to-rooms/back-to-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsViewComponent,
    HomeViewComponent,
    UserViewComponent,
    UserBadgeComponent,
    BackToRoomsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
