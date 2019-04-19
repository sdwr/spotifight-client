import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

	readonly songsPath = environment.serverUrl + "/api/songs";

  constructor() { }
}
