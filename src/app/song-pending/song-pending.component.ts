import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs'

import {LocalStateService} from '../services/local-state.service';
import {SongService} from '../services/song.service';

import {Song} from '../models/song';

@Component({
  selector: 'app-song-pending',
  templateUrl: './song-pending.component.html',
  styleUrls: ['./song-pending.component.scss']
})
export class SongPendingComponent implements OnInit {

	pendingSongs$: Observable<Song[]>;

  constructor(private localState: LocalStateService,
  						private songService: SongService) { }

  ngOnInit() {
  	this.pendingSongs$ = this.localState.pendingSongs$;
  	this.songService.getPending(this.localState.getRoom()._id).subscribe();
  }

}
