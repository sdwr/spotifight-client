import { Component, OnInit } from '@angular/core';
import {LocalStateService} from '../services/local-state.service';
import {SongService} from '../services/song.service';

import {Observable} from 'rxjs';
import {Song} from '../models/song';
@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.scss']
})
export class SongPlayerComponent implements OnInit {

	currentSong$: Observable<Song>

  constructor(private localState: LocalStateService,
  						private songService: SongService) { }

  ngOnInit() {
  	this.songService.getCurrent(this.localState.getRoom()._id).subscribe(song => {
  		this.localState.setCurrentSong(song);
  	})
  	this.currentSong$ = this.localState.currentSong$;
  }

}
