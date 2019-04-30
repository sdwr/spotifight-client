import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import {LocalStateService} from './local-state.service';

import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import {Track} from '../models/track';
import {Song} from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

	readonly songsPath = environment.serverUrl + "/api/songs";

  constructor(private localStateService: LocalStateService,
  						private http: HttpClient) { }

  getCurrent(roomId: string): Observable<Song> {
  	return this.http.get(this.songsPath + "/" + roomId + "/current") as Observable<Song>;
  }

  getPending(roomId: string): Observable<Song[]> {
  	return this.http.get(this.songsPath + "/" + roomId + "/pending") as Observable<Song[]>;
  }

  addPending(roomId: string, track: Track, userId: string) {
  	let body = new HttpParams().set('roomId', roomId);
  	body = body.set('track', track.id);
  	body = body.set('userId', userId);
  	return this.http.post(this.songsPath + "/pending", body);
  }
}
