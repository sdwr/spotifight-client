import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

	readonly roomPath = environment.serverUrl + "/api/rooms";

  constructor(private http: HttpClient) { }

  getRoom(id: string) {
  	return this.http.get(this.roomPath + "/" + id);
  }

  getUsers(id: string) {
  	return this.http.get(this.roomPath + "/" + id + "/users");
  }
}
