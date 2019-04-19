import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {User} from '../models/User';
import {Room} from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class LocalStateService {

	user$: BehaviorSubject<User>;
	room$: BehaviorSubject<Room>;


  constructor() { 
  	this.user$ = new BehaviorSubject(null);
  	this.room$ = new BehaviorSubject(null);
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


}
