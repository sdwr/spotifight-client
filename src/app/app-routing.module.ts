import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RoomsViewComponent} from './rooms-view/rooms-view.component';
import {HomeViewComponent} from './home-view/home-view.component';
import {UserViewComponent} from './user-view/user-view.component';
import {SpotifyLoginComponent} from './spotify-login/spotify-login.component';

const routes: Routes = [
	{path: 'rooms', component: RoomsViewComponent},
	{path: 'room/:id', component: HomeViewComponent},
	{path: 'user/:id', component: UserViewComponent},
	{path: 'spotifyLogin', component: SpotifyLoginComponent},
	{path: '', redirectTo: '/rooms', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
