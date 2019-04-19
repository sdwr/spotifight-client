import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { RoomsService } from '../services/rooms.service';
import {Room} from '../models/Room';

import {LocalStateService} from '../services/local-state.service';

@Component({
  selector: 'app-rooms-view',
  templateUrl: './rooms-view.component.html',
  styleUrls: ['./rooms-view.component.scss']
})
export class RoomsViewComponent implements OnInit {

	rooms;

  constructor(private router: Router,
  						private localStateService: LocalStateService,
  						private roomsService: RoomsService) { }

  ngOnInit() {
  	this.updateRoomList();
  }

  updateRoomList() {
  	this.rooms = this.roomsService.getAllRooms();
  }

  selectRoom(room: Room) {
  	this.localStateService.setRoom(room);
  	this.router.navigate(["/room", room._id]);
  }

  createRoom() {
  	this.roomsService.makeRoom()
  		.subscribe(result => {
  			this.updateRoomList();
  		})
  }

}
