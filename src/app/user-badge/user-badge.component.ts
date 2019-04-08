import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

	user$: Observable<any>

  constructor(private userService: UserService,
  						private router: Router) { }

  ngOnInit() {
  	this.loadUser();
  }

  loadUser() {
  	this.user$ = this.userService.getUser("5ca40293fef12d5b1ccc528c");
  }

  goToUser(id: string) {
  	this.user$.subscribe(u => console.log(u));
  	this.router.navigate(['/user', id]);
  }

}
