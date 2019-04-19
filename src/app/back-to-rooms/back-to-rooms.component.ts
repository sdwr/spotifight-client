import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {LocalStateService} from '../services/local-state.service';

@Component({
  selector: 'app-back-to-rooms',
  templateUrl: './back-to-rooms.component.html',
  styleUrls: ['./back-to-rooms.component.scss']
})
export class BackToRoomsComponent implements OnInit {

  constructor(private router: Router,
  						private localStateService: LocalStateService) { }

  ngOnInit() {
  }

  backToRooms() {
  	this.localStateService.setRoom(null);
  	this.router.navigate(['/rooms']);
  }

}
