import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import {environment } from '../../environments/environment';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	readonly userPath = environment.serverUrl + "/api/user";

  constructor(private http: HttpClient) { }

  getUser(id: string) {
  	return this.http.get(this.userPath + "/" + id);
  }
}
