import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-back-to-rooms',
  templateUrl: './back-to-rooms.component.html',
  styleUrls: ['./back-to-rooms.component.scss']
})
export class BackToRoomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToRooms() {
  	this.router.navigate(['/rooms']);
  }

}
