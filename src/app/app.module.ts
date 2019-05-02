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
import { SongPlayerComponent } from './song-player/song-player.component';
import { SongPendingComponent } from './song-pending/song-pending.component';
import { SongSearchComponent } from './song-search/song-search.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsViewComponent,
    HomeViewComponent,
    UserViewComponent,
    UserBadgeComponent,
    BackToRoomsComponent,
    SongPlayerComponent,
    SongPendingComponent,
    SongSearchComponent,
    SpotifyLoginComponent,
    CallbackComponent
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
