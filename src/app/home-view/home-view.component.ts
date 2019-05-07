import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import {Observable} from 'rxjs';
import {switchMap } from 'rxjs/operators';

import {RoomService} from '../services/room.service';
import {LocalStateService} from '../services/local-state.service';
import {Room} from '../models/Room';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

	room$: Observable<any>;

  constructor(private route: ActivatedRoute,
  						private roomService: RoomService,
  						private localState: LocalStateService) { }

  ngOnInit() {
    this.room$ = this.localState.room$;
  	this.route.paramMap
    .pipe(switchMap((params: ParamMap) =>
  		this.roomService.getRoom(params.get('id')))
    )
    .subscribe(room => this.localState.setRoom(room as Room));
  }

}
