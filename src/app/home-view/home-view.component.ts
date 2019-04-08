import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import {Observable} from 'rxjs';
import {switchMap } from 'rxjs/operators';

import {RoomService} from '../services/room.service';
import {UserService} from '../services/user.service';
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
  						private userService: UserService) { }

  ngOnInit() {
  	this.room$ = this.route.paramMap.pipe(
  		switchMap((params: ParamMap) =>
  			this.roomService.getRoom(params.get('id')))
  		);
  }

}
