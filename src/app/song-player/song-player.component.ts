import { Component, OnInit } from '@angular/core';
import {LocalStateService} from '../services/local-state.service';

import {Observable} from 'rxjs';
import {Song} from '../models/song';
@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.scss']
})
export class SongPlayerComponent implements OnInit {

	currentSong$: Observable<Song>

  constructor(private localState: LocalStateService) { }

  ngOnInit() {
  	this.currentSong$ = this.localState.currentSong$;
  }

}
