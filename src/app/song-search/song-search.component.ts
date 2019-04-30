import { Component, OnInit } from '@angular/core';

import {Room} from '../models/room';
import {Track} from '../models/track';
import {User} from '../models/user';
import {SpotifyService} from '../services/spotify.service';
import {LocalStateService} from '../services/local-state.service';
import {SongService} from '../services/song.service';
@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.scss']
})
export class SongSearchComponent implements OnInit {

	searchResults: Track[];

	constructor(private spotifyService: SpotifyService,
							private localState: LocalStateService,
							private songService: SongService) { }

	ngOnInit() {
		this.searchResults = [];
	}

	searchForSong(searchText: string) {
	  if(searchText && searchText != "") {
	    this.spotifyService.searchForSong(searchText)
	      .then(songs => this.searchResults = songs.tracks.items);
	  }
	}

	addPending(track: Track) {
		let room = this.localState.getRoom();
		let user = this.localState.getUser();
		this.songService.addPending(room._id, track, user.id);
	}

}
