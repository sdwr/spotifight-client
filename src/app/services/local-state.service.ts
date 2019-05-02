import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {User} from '../models/User';
import {Room} from '../models/Room';
import {Song} from '../models/Song';

@Injectable({
  providedIn: 'root'
})
export class LocalStateService {

	user$: BehaviorSubject<User>;
	room$: BehaviorSubject<Room>;
	currentSong$: BehaviorSubject<Song>;
	pendingSongs$: BehaviorSubject<Song[]>;


  constructor() { 
  	this.user$ = new BehaviorSubject(null);
  	this.room$ = new BehaviorSubject(null);
  	this.currentSong$ = new BehaviorSubject(null);
  	this.pendingSongs$ = new BehaviorSubject(null);
  }

  getUser(): User {
  	return this.user$.value;
  }

  setUser(user: User): void {
  	this.user$.next(user);
  }

  getRoom(): Room {
  	return this.room$.value;
  }

  setRoom(room: Room): void {
  	this.room$.next(room);
  }

  getCurrentSong(): Song {
  	return this.currentSong$.value;
  }

  setCurrentSong(song: Song): void {
  	this.currentSong$.next(song);
  }

  getPendingSongs(): Song[] {
  	return this.pendingSongs$.value;
  }

  setPendingSongs(songs: Song[]) {
  	this.pendingSongs$.next(songs);
  }


}
