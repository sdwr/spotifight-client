import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {LocalStateService} from '../services/local-state.service';
import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.scss']
})
export class SpotifyLoginComponent implements OnInit {

  constructor(private router: Router,
  						private localStateService: LocalStateService,
  						private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  login() {
  	this.spotifyService.authorize();
  }

}
