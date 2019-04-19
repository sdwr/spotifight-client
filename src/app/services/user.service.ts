import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {environment } from '../../environments/environment';
import {User} from '../models/User';

import {LocalStateService} from './local-state.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	readonly userPath = environment.serverUrl + "/api/user";

	public user$: BehaviorSubject<User>;

  constructor(private http: HttpClient,
  						private localStateService: LocalStateService) {
  	this.logIn().subscribe();
  }

  logIn() {
  	let savedId = localStorage.getItem("userId");
  	let obs;
  	if(savedId) {
  		obs = this.getUser(savedId);
  	} else {
  		obs = this.createUser('newUser');
  	}
  	return obs.pipe(tap((u) => {
  		let user = u as User;
  		this.localStateService.setUser(user);
  		localStorage.setItem("userId", user.id);
  	}));
  }

  getUser(id: string): Observable<User> {
  	return this.http.get(this.userPath + "/" + id) as Observable<User>;
  }

  createUser(name: string): Observable<User> {
  	let body = new HttpParams().set('name', name);
  	return this.http.post(this.userPath, body) as Observable<User>;
  }

  updateUserRoom(userId: string, roomId: string) {
  	return this.http.put(this.userPath + "/" + userId + "/" + roomId, null);
  }

  updateUserName(userId: string, name: string) {
  	let body = new HttpParams().set('name', name)
  	return this.http.put(this.userPath + "/" + userId, body);
  }
}
