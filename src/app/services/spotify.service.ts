import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import SpotifyWebApi from 'spotify-web-api-js';
import * as moment from 'moment';

import { SongService } from './song.service';
import { LocalStateService} from './local-state.service';
import { UserService} from './user.service';
import { Track } from '../models/track';
import {Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

	clientId: string;
	redirectUri: string;
	scope: string;
	response_type: string;

  accessToken: string;
  expiresAt: any;

  spotifyApi: any;

  syncWithSpotify: boolean;

  constructor(private http: HttpClient,
              private songService: SongService,
              private localStateService: LocalStateService,
              private router: Router,
              private userService: UserService) {
  	this.clientId = '4ab300b68542479483b2e9b509c8a31e';
  	this.redirectUri = window.location.origin + "/callback";
  	this.scope = 'user-modify-playback-state user-read-currently-playing user-read-playback-state';
  	this.response_type = 'token';

    this.accessToken = null;
    this.expiresAt = null;

    this.syncWithSpotify = false;

    this.spotifyApi = new SpotifyWebApi();

    this.tryLoadToken();
  }

  tryLoadToken() {
    let accessToken = localStorage.getItem("accessToken");
    let expiresAt = localStorage.getItem("expiresAt");

    if(accessToken && expiresAt) {
      this.accessToken = accessToken;
      this.expiresAt = expiresAt;
      this.spotifyApi.setAccessToken(this.accessToken);
    }
  }

  authorize() {
  	let baseUrl = "https://accounts.spotify.com/authorize?";
  	let params = new HttpParams();
  	params = params.append('client_id', this.clientId);
  	params = params.append('redirect_uri', this.redirectUri);
  	params = params.append('scope', this.scope);
  	params = params.append('response_type', this.response_type);

  	let fullUrl = baseUrl + params.toString();
  	window.location.replace(fullUrl);
  }

  authResponse(queryParams) {
  	let accessToken = queryParams.get('access_token');
  	let tokenType = queryParams.get('token_type');
  	let expiresIn = queryParams.get('expires_in');
  	let state = queryParams.get('state');
  	let error = queryParams.get('error');
  	let expiresAt = moment().add(expiresIn, 'seconds').toString();

  	if (accessToken) {
  		localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("expiresAt", expiresAt);
      this.tryLoadToken();
      this.router.navigate(['/rooms']);
    } else {
      console.log("Error logging in to spotify: " + error);
    }
  }

  checkExpired() {
  	if (!this.expiresAt || !this.accessToken || moment().isAfter(this.expiresAt)) {
  		this.backToLoginOnExpiry();
  		return true;
  	}
  	return false;
  }

  backToLoginOnExpiry() {
		this.clearToken();
		this.router.navigate(['/spotifyLogin']);
  }

  clearToken(){
		localStorage.setItem('accessToken', "");
		localStorage.setItem('expiresAt', "");
		this.expiresAt = null;
		this.accessToken = null;
  }

  isLoggedInToSpotify(): boolean {
    return this.accessToken && this.expiresAt && moment().isBefore(this.expiresAt);
  }

  getTokenExpiry() {
    return this.expiresAt;
  }

  getUser() {
  	if(!this.checkExpired()) { 
  	  return this.spotifyApi.getMe();
  	 }
  }

  getCurrentlyPlaying() {
  	if(!this.checkExpired()) {
    	return this.spotifyApi.getMyCurrentPlaybackState();
  	}
  }

  getSong(id: string) {
  }

  setSong(track: Track, position_ms: number) {
    if(this.syncWithSpotify) {
    	if(!this.checkExpired()){
    		return this.spotifyApi.play({uris: [track.uri], position_ms});
    	}
    }
  }

  searchForSong(searchText: string): Promise<any> {
  	if(!this.checkExpired()) {
    	return this.spotifyApi.searchTracks(searchText, {limit: 10});
  	}
  }

  setSync(sync: boolean) {
    this.syncWithSpotify = sync;
    if(sync) {
    	let room = this.localStateService.getRoom();
      this.songService.getCurrent(room._id).subscribe(song => {
        if (song && song.trackObj) {
        	this.localStateService.setCurrentSong(song);
          this.setSong(song.trackObj, song.elapsed_ms);
        }
      });
    }
  }

  getSync() {
    return this.syncWithSpotify;
  }
}