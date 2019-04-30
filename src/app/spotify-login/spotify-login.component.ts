import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.scss']
})
export class SpotifyLoginComponent implements OnInit {

  constructor(private router: Router,
  						private localStateService: LocalStateService) { }

  ngOnInit() {
  }

}
